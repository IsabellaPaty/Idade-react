import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');

  const handleCheckAge = () => {
    const ageInt = parseInt(age);
    if (isNaN(ageInt)) {
      setMessage('Por favor, insira uma idade válida.');
    } else {
      if (ageInt >= 0 && ageInt <= 12) {
        setMessage('Você é uma criança.');
      } else if (ageInt >= 13 && ageInt <= 17) {
        setMessage('Você é um adolescente.');
      } else if (ageInt >= 18 && ageInt <= 20) {
        setMessage('Você é um jovem adulto.');
      } else if (ageInt >= 21 && ageInt <= 60) {
        setMessage('Você é um adulto.');
      } else {
        setMessage('Você é um idoso.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verificador de Idade</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua idade"
        onChangeText={(text) => setAge(text)}
        value={age}
        keyboardType="numeric"
      />
      <Button title="Verificar Idade" onPress={handleCheckAge} />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  message: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
  },
});
