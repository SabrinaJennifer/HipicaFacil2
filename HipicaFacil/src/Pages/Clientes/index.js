import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const Clientes = () => {
  const [clientForm, setClientForm] = useState({
    nome: '',
    endereco: '',
    telefone: '',
    email: '',
    nomeCavalo: ''
  })
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [nomeCavalo, setNomeCavalo] = useState('');

  const handleSubmit = () => {
    // Aqui você pode enviar os dados para o backend ou fazer o que for necessário
    console.log('Dados do formulário:', { nome, endereco, telefone, email, nomeCavalo });
    // Limpar os campos após o envio
    setNome('');
    setEndereco('');
    setTelefone('');
    setEmail('');
    setNomeCavalo('');
  };
  

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={(text) => setNome(text)}
      />

      <Text style={styles.label}>Endereço:</Text>
      <TextInput
        style={styles.input}
        value={endereco}
        onChangeText={(text) => setEndereco(text)}
      />

      <Text style={styles.label}>Telefone:</Text>
      <TextInput
        style={styles.input}
        value={telefone}
        onChangeText={(text) => setTelefone(text)}
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>E-mail:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Nome do Cavalo Utilizado:</Text>
      <TextInput
        style={styles.input}
        value={nomeCavalo}
        onChangeText={(text) => setNomeCavalo(text)}
      />

      <Button title="Cadastrar" onPress={handleSubmit} />
    </SafeAreaView>
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

export default Clientes;