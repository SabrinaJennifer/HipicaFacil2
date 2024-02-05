import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Button, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const CadastroModal = ({ visible, onClose, onSave }) => {
  const [nome, setNome] = useState('');

  const handleCadastro = () => {
    onSave({ nome });
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.formContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Cadastro</Text>
          <TextInput
            style={styles.input}
            placeholder="ReceitaDespesa"
            value={nome}
            onChangeText={setNome}
          />
          <Button title="Cadastrar" onPress={handleCadastro} />
        </View>
      </View>
    </Modal>
  );
};

const BotaoModal = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>+ Cadastrar</Text>
    </TouchableOpacity>
  );
};

const DataTable = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text>{item.nome}</Text>
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [cadastros, setCadastros] = useState([]);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleSaveCadastro = (cadastro) => {
    setCadastros([...cadastros, cadastro]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonCadastro}>
        <BotaoModal onPress={handleOpenModal} />
      </View>
      <CadastroModal visible={modalVisible} onClose={handleCloseModal} onSave={handleSaveCadastro} />
      <DataTable data={cadastros} />
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  formContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 30,
    width: 200,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    marginLeft: 30,
    zIndex: 1,
  },
  buttonCadastro: {
   alignSelf:'flex-end',
   marginRight: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: 'rgba(50, 115, 220, 0.3)',
  },
});

  



