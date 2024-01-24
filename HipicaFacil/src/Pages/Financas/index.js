import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { Table, Row, Rows } from 'react-native-table-component';

const CadastroClientesScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [clientes, setClientes] = useState([]);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleCadastrar = () => {
    // Validar os campos antes de salvar
    if (nome && endereco && telefone) {
      const novoCliente = { nome, endereco, telefone };
      setClientes([...clientes, novoCliente]);
      toggleModal();
      // Você pode adicionar lógica de persistência aqui (por exemplo, salvar em um banco de dados)
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Cadastrar Cliente" onPress={toggleModal} />

      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          <Text>Formulário de Cadastro</Text>

          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={nome}
            onChangeText={(text) => setNome(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Endereço"
            value={endereco}
            onChangeText={(text) => setEndereco(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Telefone"
            value={telefone}
            onChangeText={(text) => setTelefone(text)}
          />

          <Button title="Cadastrar" onPress={handleCadastrar} />
          <Button title="Fechar" onPress={toggleModal} />
        </View>
      </Modal>

      <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
        <Row data={['Nome', 'Endereço', 'Telefone']} style={styles.head} textStyle={styles.text} />
        <Rows data={clientes.map((cliente) => Object.values(cliente))} textStyle={styles.text} />
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  modalContainer: { backgroundColor: 'white', padding: 22, borderRadius: 4, borderColor: 'rgba(0, 0, 0, 0.1)' },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 16, paddingHorizontal: 8, width: '100%' },
  head: { height: 40,lineHeight:80, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
});

export default CadastroClientesScreen;

