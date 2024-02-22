import React, { useState } from 'react';
import { View, Text, Button, Modal, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const Clientes = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [clients, setClients] = useState([]);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [horseName, setHorseName] = useState('');

  const handleSave = () => {
    if (validateInputs()) {
      setClients([...clients, { name, address, phone, email, horseName }]);
      setName('');
      setAddress('');
      setPhone('');
      setEmail('');
      setHorseName('');
      setModalVisible(false);
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  };

  const validateInputs = () => {
    const phoneRegex = /^\d+$/;
    return name && address && phone && email && horseName && phoneRegex.test(phone);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View>
        <Text>Nome: {item.name}</Text>
        <Text>Endereço: {item.address}</Text>
        <Text>Telefone: {item.phone}</Text>
        <Text>Email: {item.email}</Text>
        <Text>Nome do cavalo: {item.horseName}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.input}
              placeholder="Nome"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.input}
              placeholder="Endereço"
              value={address}
              onChangeText={setAddress}
            />
            <TextInput
              style={styles.input}
              placeholder="Telefone"
              value={phone}
              onChangeText={setPhone}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              placeholder="Nome do cavalo"
              value={horseName}
              onChangeText={setHorseName}
            />
            <View style={styles.buttonsContainer}>
              <Button title="Cancelar" onPress={() => setModalVisible(false)} color="gray" />
              <Button title="Salvar" onPress={handleSave} />
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>Adicionar Cliente</Text>
      </TouchableOpacity>
      <FlatList
        data={clients}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    paddingHorizontal: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    height: 40,
    width: '100%',
    marginBottom: 20,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 30,
    width: 200,
    alignSelf: 'flex-end'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  item: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
});

export default Clientes;
