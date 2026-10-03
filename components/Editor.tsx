import React, { forwardRef } from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import {
  actions,
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";

import { Colors } from "../theme/colors";

type EditorProps = {
  content: string | undefined;
  onContentChange: (content: string) => void;
};

const Editor = forwardRef<RichEditor, EditorProps>(
  ({ content, onContentChange }, ref) => {
    return (
      <>
        <View style={styles.editorContainer}>
          <RichEditor
            ref={ref}
            style={styles.editor}
            placeholder="Write your task description..."
            useContainer={true}
            initialContentHTML={content}
            onChange={(descriptionText: string) => {
              onContentChange(descriptionText);
            }}
          />
        </View>

        <View style={styles.toolbarContainer}>
          <RichToolbar
            editor={ref}
            actions={[
              actions.setBold,
              actions.setItalic,
              actions.setUnderline,
              actions.heading1,
              actions.insertBulletsList,
              actions.insertOrderedList,
            ]}
            style={styles.toolbar}
          />
        </View>
      </>
    );
  }
);

Editor.displayName = "Editor";

export default Editor;

const styles = StyleSheet.create({
  editorContainer: {
    flex: 1,
    overflow: "hidden",
  },

  editor: {
    flex: 1,
  },

  toolbarContainer: {
    height: 55,
  },

  toolbar: {
    flex: 1,
    borderTopWidth: 1,
    borderColor: Colors.dark.border.divider,
    borderRadius: 10,
    backgroundColor: Colors.dark.background.surface,
  },
});