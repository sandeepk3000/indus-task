import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import ScreenWrapper from '../../../components/ScreenWrapper'
import TaskFilterBar from '../../../components/TaskFilterBar'
import TaskCard from '../../../components/Card'
import { useFocusEffect, useRouter } from 'expo-router'
import { Task, TaskFilter } from '../../../types'
import Button from '../../../components/Button'
import { Plus } from 'lucide-react-native'
import { Colors } from '../../../theme/colors'
import { scale, verticalScale } from '../../../utils/styling'
import { generateDate, generateTime } from '../../../utils/date'
import { deleteTask, getAllTasks } from '../../../hooks/useTask'
import SearchBar from '../../../components/SearchBar'
import TaskActionMenu from '../../../components/TaskActionMenu'

const index = () => {

  const router = useRouter()
  const [data, setData] = useState<Task[] | null>(null)
  const [filteredTasks, setFilteredTasks] = useState<Task[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [searchText, setSearchText] = useState("")
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState("")
  useEffect(() => {
    // Replace with your actual function to fetch tasks
    if (data) {
      const sortedTasks = [...data].sort((a, b) => {
        const convertTime = (time: string) => {
          const [value, modifier] = time.split(" ");

          let [hours, minutes] = value.split(":").map(Number);

          if (modifier === "PM" && hours !== 12) {
            hours += 12;
          }

          if (modifier === "AM" && hours === 12) {
            hours = 0;
          }

          return hours * 60 + minutes;
        };

        return convertTime(b.time) - convertTime(a.time);
      });
      const filteredData = sortedTasks.filter((task) => {

        return true
      })
      if (filteredData) {
        setFilteredTasks(filteredData)
      }
    }
  }, [data, searchText])

  useEffect(() => {
    const filtered = data?.filter((i) => i.title.toLowerCase().includes(searchText))
    if (filtered) {
      setFilteredTasks(filtered)
    }
  }, [searchText])
  const getTasks = async () => {
    setLoading(true)
    try {
      const tasks = await getAllTasks()
      if (tasks) {
        setData(tasks)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }

  }
  const handleDelete = async () => {
    try {
      await deleteTask(selectedTaskId)
    } catch (error) {
      console.log(error)
    } finally {
      setSelectedTaskId("")
      getTasks()
    }
  }
  useFocusEffect(
    useCallback(() => {
      getTasks()
    }, [])
  )

  const setCompletion = (id: string) => {
    const newData = data?.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    );
    if (newData) setData(newData)
  }


  return (
    <View style={styles.container}>

      <ScreenWrapper scroll={true}>
        <SearchBar value={searchText} placeholder='Search task....' onChangeText={(text) => setSearchText(text)} />

        {loading ? (
          <Text style={{
            color: "white",
           
          }}>Loading...</Text>
        ) : (
          filteredTasks?.map((item) => (
            <TaskCard
              key={item.id}
              title={item.title}
              onLongPress={(selector) => {
                setMenuVisible(selector)
                setSelectedTaskId(item.id)
              }}
              time={item.time}
              date={item.date}
              id={item.id}
              onPress={() => router.push(`/task/edit/${item.id}`)}
            />
          )))}

      </ScreenWrapper>

      <TaskActionMenu
        visible={menuVisible}
        onClose={() => setMenuVisible(false)}
        onPin={() => console.log("pin")}
        onLock={() => console.log("lock")}
        onDuplicate={() => console.log("duplicate")}
        onWidget={() => console.log("widget")}
        onMove={() => console.log("move")}
        onShare={() => console.log("share")}
        onDelete={() => handleDelete()}
      />
      <Button
        style={styles.button}
        onPress={() => router.push("/(tabs)/create")}
      >
        <Plus color="white" size={30} />
      </Button>
    </View>
  );
}

export default index

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: verticalScale(100),
    right: scale(20),
    width: verticalScale(45),
    height: verticalScale(45),
    borderRadius: 30,
    backgroundColor: Colors.dark.brand.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background.main,
  },
})