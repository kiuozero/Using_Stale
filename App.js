import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('Zero');
  const [person, setPerson] = useState({name: 'Zero', age: 20});

  const clickHandler = () => {
    setName('Kiuo');
    setPerson({name: 'kiuo', age: 23});
  }

  return (
    <View style={styles.container}>
    <Text>Tên tôi là: {name}</Text>
    <Text>Anh ta tên là: {person.name} và tuổi: {person.age}</Text>
    <View style={styles.buttonContainer}>
      <Button title='update state' onPress={clickHandler} />
    </View>
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
  buttonContainer: {
    marginTop: 20,
  }

});

