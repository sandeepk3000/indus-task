import React, { forwardRef } from "react";
import { View, StyleSheet } from "react-native";

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
        {/* Editor */}
        <View style={styles.editorContainer}>
          <RichEditor
            ref={ref}
            style={styles.editor}
            placeholder="Write your task description..."
            useContainer={true}
            initialContentHTML={content}

            editorStyle={{
              backgroundColor: Colors.dark.background.card,
              color: "white",
              placeholderColor: "white",

              contentCSSText: `
                padding: 12px;
                font-size: 16px;
                color: white;
              `,
            }}

            onChange={(descriptionText: string) => {
              onContentChange(descriptionText);
            }}
          />
        </View>

        {/* Toolbar */}
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
    borderRadius: 10,
    overflow:"hidden",
    shadowColor: Colors.dark.text.muted,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    
    shadowOpacity: 0.25,
    shadowRadius: 6,

    // Android
    elevation: 8,
  },

  toolbar: {
    flex: 1,
    backgroundColor: Colors.dark.background.card,
  },
});