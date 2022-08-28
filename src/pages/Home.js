import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Platform, FlatList } from 'react-native';
import { Button } from '../components/Button';
import { TaskCard } from '../components/TaksCard';

export function Home() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [greeting, setGreeting] = useState('');

  function handleAddTask() {
    setTasks(oldState => [...oldState, newTask]);
  }

  // Usa dois parametros, primeiro uma função, segundo dependencias dentro de um vetor.
  // caso o vetor esteja em branco na segunda dependencia, ele vai carregar somente uma vez no momento da montagem.

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting('Good Morning')
    } 
    if (currentHour > 12 && currentHour < 18)   {
      setGreeting('Good Afternoom')
    }
    if (currentHour > 18)  {
      setGreeting('Good Night')
    }

  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome,</Text>
      <Text style={[styles.greetings]}>
        {greeting}
      </Text>
      <TextInput
        style={styles.input}
        placeholder="new task"
        placeholderTextColor="#555"
        onChangeText={setNewTask}
      >
      </TextInput>

      <Button onPress={handleAddTask} />

      <Text style={[styles.title, { marginVertical: 50 }]}>
        My Tasks
      </Text>

      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => <TaskCard task={item} />}
      />

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 30
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
  greetings: {
    color: '#fff',
  }
})