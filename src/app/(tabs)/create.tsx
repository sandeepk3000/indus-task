import { StyleSheet, Text, View } from 'react-native'

import ScreenWrapper from '../../../components/ScreenWrapper'
import RichTextEditor from '../../../components/Editor'
import {useCallback, useEffect, useRef, useState} from 'react'
import { RichEditor } from 'react-native-pell-rich-editor'

import { Colors } from '../../../theme/colors'

import { generateDate, generateTime } from '../../../utils/date'
import Input from '../../../components/Input'
import { saveTask } from '../../../hooks/useTask'
import { useFocusEffect } from 'expo-router'

const create = () => {
	const editorRef = useRef<RichEditor >(null);
	const [content, setContent] = useState<string>("");
	const [title, setTitle] = useState<string>("");
	const handleChange = async (descriptionText: string) => {
		try {
			await saveTask({
				id: generateTime() + generateDate(),
				title: title,
				content: descriptionText,
				time: generateTime(),
				date: generateDate(),
				completed: false,
			});
			setContent(descriptionText);
		} catch (error) {
			console.log("Save error:", error);
		}
	};
	useFocusEffect(
		useCallback(() => {
			setContent("");
			setTitle("");
		},[])
	)

  return (

		<ScreenWrapper keyboardAvoiding={true} style={styles.container}>
		<Input value={title} onChangeText={(text) => setTitle(text)} placeholder="Task Title" />
		<RichTextEditor ref={editorRef} content={content} onContentChange={handleChange} />
			
		</ScreenWrapper>
	);
  
}

export default create

const styles = StyleSheet.create({

	container: {
		flex: 1,
		backgroundColor: Colors.dark.background.card,

	},

})