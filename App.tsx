import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, FlatList, Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

interface Itodo {
  id: number;
  text: string;
}

export default function App() {
  const [itemValue, setItemValue] = useState("")
  const [itemArray, setItemArray] = useState<Itodo[]>([])

  const handleAddItem = () => {
    if (itemValue) {
      setItemArray([...itemArray, { 
        id: itemArray.length + 1,
        text: itemValue,
      }])
      setItemValue("")
    } else {
      Alert.alert('Lỗi', 'input đang trống', [
        {text: 'xác nhận' },
      ])
    }
  }

  const handleRemoveItem = (id: number) => {
    setItemArray(itemArray.filter(item => item.id!== id))
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.title}>To Do App</Text>
        <View>
          <TextInput 
            style={styles.input} 
            placeholder="Add a new item" 
            onChangeText={text => setItemValue(text)} 
            value={itemValue}
          />
        </View>
        <View style={styles.button}>
          <Button title="Add Item" onPress={handleAddItem} />
        </View>
        <View style={styles.todoList}>
          <FlatList
            data={itemArray}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <View 
                style={{
                  backgroundColor: '#f2f2f2',
                  padding: 16,
                  borderRadius: 8,
                  marginBottom: 20,
                  width: '90%',
                  alignSelf: 'center',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}
              >
                <Text style={styles.text}>{item.text}</Text>
                <AntDesign name="closecircle" size={24} color="red" onPress={() => handleRemoveItem(item.id)}/>
              </View>
            )}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    backgroundColor: '#fff',
  },
  title:{
    color: '#333',
    textAlign: 'center',
    marginVertical: 25,
    fontSize: 40,
    backgroundColor: 'rgba(255, 255, 0, 0.4)',
    paddingVertical: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',

  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 18,
    backgroundColor: '#f2f2f2',
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 10,
  },
  button: {
    width: '50%',
    alignSelf: 'center',
    marginBottom: 20,
    paddingVertical: 10,
  },
  todoList: {
    flex: 1
  }
});
