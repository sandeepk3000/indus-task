import { Text, View, StyleSheet } from "react-native"
import ScreenWrapper from "../../../../components/ScreenWrapper";
import RichTextEditor from "../../../../components/Editor";
import { RichEditor } from "react-native-pell-rich-editor";
import { useEffect, useRef, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLocalSearchParams } from "expo-router";
import { getTask, saveTask } from "../../../../hooks/useTask";
import { generateDate, generateTime } from "../../../../utils/date";
import Input from "../../../../components/Input";
export default function EditTaskPage() {
	const {id} = useLocalSearchParams();
	const editorRef = useRef<RichEditor>(null);
	const [title, setTitle] = useState("");
	const [content, setContent] = useState<string| undefined>(undefined);
	const [isInitialLoad, setIsInitialLoad] = useState(true);
	const [loading, setLoading] = useState(true);
	const handleChange = async (descriptionText: string) => {
		try {
			if (isInitialLoad) {
				return;
			}
			saveTask({
				id: id as string,
				title: title,
				content: descriptionText,
				time: generateTime(),
				date: generateDate(),
				completed: false,
			})
		} catch (error) {
			console.log("Save error:", error);
		}
	};
	useEffect(() => {
		// You can perform any additional logic here if needed

		const loadDescription = async () => {
			try {
				setLoading(true);
				const data = await getTask(id as string);

				if (data) {
					setTitle(data.title);
					setContent(data.content);
				}
			} catch (error) {

			}
			finally {
				setLoading(false);
				setIsInitialLoad(false);
			}
		}

		loadDescription();
		
		// Set to false after the initial load
	}, []);
	return (
		<ScreenWrapper keyboardAvoiding={true} style={styles.container}>
			{!loading && (<>
				<Input value={title} onChangeText={(text) => {
					setTitle(text)
					
					handleChange(content || "")
				}} placeholder="Task Title" />
				<RichTextEditor ref={editorRef} content={content} onContentChange={handleChange} />
				</>
			)}
		</ScreenWrapper>
	);
}

const styles = StyleSheet.create({

	container: {
		flex: 1,
		backgroundColor: "#111820",

	},

})