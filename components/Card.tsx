// components/TaskCard.tsx

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { scale, verticalScale } from "../utils/styling";

type TaskCardProps = {
  id:string;
  title: string;
  time?: string;
  date?: string;
  onPress?: () => void;
  onLongPress:(selector:boolean)=>void;
};

export default function TaskCard({
  id,
  title,
  time,
  date,
  onLongPress,
  onPress,
}: TaskCardProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      onLongPress={()=> onLongPress(true)}
      style={[styles.card]}
    >
     

      {/* Content */}
      <View style={styles.content}>
        <Text
          numberOfLines={1}
          style={[
            styles.title,
          ]}
        >
          {title}
        </Text>

        <View style={styles.meta}>
          {date && <Text style={styles.date}>{date}</Text>}
          {time && <Text style={styles.time}>{time}</Text>}
        </View>
      </View>

      {/* Arrow */}
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    minHeight: 100,
    paddingHorizontal: 16,
    paddingVertical: 14,

    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#11141A",
    borderRadius: 8,

    borderWidth: 1,
    borderColor: "#242832",

    marginBottom: 12,
  },

 
  content: {
    flex: 1,
  },

  title: {
    color: "#FFFFFF",
    fontSize: verticalScale(14),
    fontWeight: "700",
    marginBottom: 6,
  },

  completedTitle: {
    textDecorationLine: "line-through",
    color: "#8C919B",
  },

  meta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  date: {
    color: "#969BA5",
    fontSize: verticalScale(10),
  },

  time: {
    color: "#FF3150",
    fontSize: 12,
    fontWeight: "600",
  },

  arrow: {
    color: "#707680",
    fontSize: 28,
    marginLeft: 10,
  },
});