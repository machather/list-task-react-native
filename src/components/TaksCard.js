import React from "react";
import { TouchableOpacity, Text, StyleSheet} from "react-native";

export function TaskCard({index, task}) {
  return (
    <TouchableOpacity style={styles.buttonTask}>
    <Text style={[styles.textTasks]}>
      {task}
    </Text>
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonTask: {
    backgroundColor: '#1F1E25',
    padding: 15,
    margin: 5,
    borderRadius: 50,
    alignItems: 'center',
  },
  textTasks: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  }
})