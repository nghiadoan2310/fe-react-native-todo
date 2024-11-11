import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState<number>(0)
  const [name, setName] = useState<string>("")

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name: {name}</Text>
      <TextInput style={styles.input} onChangeText={(value) => setName(value)} placeholder='Enter your name' maxLength={20} autoCorrect={false}/>
      <Text style={styles.text}>count: {count}</Text>
      <Button title='increase' onPress={() => setCount(count + 1)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: 200,
    padding: 10,
    borderColor: '#737373',
    borderWidth: 1,
    marginBottom: 16,
    textDecorationLine: 'none',

  }
});
