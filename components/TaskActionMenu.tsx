import React from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";

import {
  Pin,
  Lock,
  Copy,
  PanelsTopLeft,
  FolderInput,
  Share2,
  Trash2,
} from "lucide-react-native";
import { scale, verticalScale } from "../utils/styling";


type TaskActionMenuProps = {
  visible: boolean;
  onClose: () => void;
  onPin?: () => void;
  onLock?: () => void;
  onDuplicate?: () => void;
  onWidget?: () => void;
  onMove?: () => void;
  onShare?: () => void;
  onDelete?: () => void;
  isPinned?: boolean;
  isLocked?: boolean;
};

type ActionItemProps = {
  label: string;
  onPress: () => void;
  icon: React.ReactNode;
  danger?: boolean;
};

const TaskActionItem = ({
  label,
  onPress,
  icon,
  danger = false,
}: ActionItemProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.actionItem,
        pressed && styles.actionPressed,
      ]}
    >
      <View style={styles.iconContainer}>{icon}</View>

      <Text style={[styles.actionText, danger && styles.dangerText]}>
        {label}
      </Text>
    </Pressable>
  );
};

const TaskActionMenu = ({
  visible,
  onClose,
  onPin,
  onLock,
  onDuplicate,
  onWidget,
  onMove,
  onShare,
  onDelete,
  isPinned = false,
  isLocked = false,
}: TaskActionMenuProps) => {
  const handleAction = (callback?: () => void) => {
    onClose();

    // Modal close hone ke baad action execute hoga
    requestAnimationFrame(() => {
      callback?.();
    });
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      {/* Overlay */}
      <Pressable style={styles.overlay} onPress={onClose}>
        {/* Menu */}
        <Pressable
          style={styles.menu}
          onPress={(event) => event.stopPropagation()}
        >
        
          <TaskActionItem
            label="Delete"
            onPress={() => handleAction(onDelete)}
            danger
            icon={
              <Trash2
                size={verticalScale(20)}
                color="#BDBDBD"
                strokeWidth={2}
              />
            }
          />
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default TaskActionMenu;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "transparent",

    justifyContent: "flex-start",
    alignItems: "flex-start",
  },

  menu: {
    position: "absolute",

    top: 150,
    left: 10,

    width: verticalScale(150),

    backgroundColor: "#292929",

    borderRadius: 12,

    paddingVertical: 12,

    elevation: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.35,
    shadowRadius: 10,
  },

  actionItem: {
    minHeight: 60,

    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: 24,
  },

  actionPressed: {
    backgroundColor: "#353535",
  },

  iconContainer: {
    width: 40,

    alignItems: "flex-start",
    justifyContent: "center",

    marginRight: 12,
  },

  actionText: {
    flex: 1,

    color: "#F5F5F5",

    fontSize: verticalScale(12),

    fontWeight: "400",
  },

  dangerText: {
    color: "#F5F5F5",
  },
});