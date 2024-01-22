import React, {useState  } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


const Cavalos = () => {
  const [horseForm, setHorseform] = useState({
    nome: '',
    raca: '',
    idade: '',
    peso: '',
    altura: ''
      })
  const [nome, setNome] = useState('');
  const [raca, setRaca] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const handleSubmit = () => {
    // Aqui você pode enviar os dados para o backend ou fazer o que for necessário
    console.log('Dados do formulário:', { nome, raca, idade, peso, altura });
    // Limpar os campos após o envio
    setNome('');
    setRaca('');
    setIdade('');
    setPeso('');
    setAltura('');
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={(text) => setNome(text)}
      />

      <Text style={styles.label}>Raça:</Text>
      <TextInput
        style={styles.input}
        value={raca}
        onChangeText={(text) => setRaca(text)}
      />

      <Text style={styles.label}>Idade:</Text>
      <TextInput
        style={styles.input}
        value={idade}
        onChangeText={(text) => setIdade(text)}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Peso:</Text>
      <TextInput
        style={styles.input}
        value={peso}
        onChangeText={(text) => setPeso(text)}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Altura:</Text>
      <TextInput
        style={styles.input}
        value={altura}
        onChangeText={(text) => setAltura(text)}
        keyboardType="decimal-pad"
      />

      <Button title="Cadastrar" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default Cavalos;