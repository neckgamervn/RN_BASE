import React from "react";
import R from "@R";
import { Alert } from "react-native";

export const showConfirm = (
  title,
  content,
  action?,
  textCancel?,
  textConfirm?
) => {
  Alert.alert(
    title,
    content,
    [
      {
        text: textCancel || R.strings().cancel,
        style: "cancel"
      },
      {
        text: textConfirm || R.strings().confirm,
        onPress: action
      }
    ],
    { cancelable: false }
  );
};

export const showMessages = (title, content, action?) => {
  setTimeout(() => {
    Alert.alert(
      title,
      content,
      [
        {
          text: "OK",
          onPress: action
        }
      ],
      { cancelable: false }
    );
  }, 100);
};
