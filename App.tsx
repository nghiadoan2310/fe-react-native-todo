import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const FOODLIST = [
    'Apple',
    'Banana',
    'Pear',
    'Orange',
    'Grapes',
    'Strawberry',
    'Mango',
    'Pineapple',
    'Watermelon',
    'Papaya',
    'Cherry',
    'Coconut',
    'Milk',
    'Rice',
    'Sugar',
    'Bread',
    'Cheese',
    'Tomato',
    'Cucumber',
    'Lettuce',
    'Broccoli',
    'Carrot',
    'Corn',
    'Onion',
    'Garlic',
    'Peas',
    'Zucchini',
    'Eggplant',
    'Radish',
    'Spinach',
    'Broccoli',
    'Bell Pepper',
    'Cabbage',
    'Sweet Potato',
    'Corn',
    'Kale',
  ]

  return (
    <View style={styles.container}>
      <FlatList
        data={FOODLIST}
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
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text style={styles.text}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
