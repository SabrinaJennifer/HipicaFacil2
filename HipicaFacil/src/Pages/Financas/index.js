import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const CadastroModal = ({ visible, onClose }) => {
  const [nome, setNome] = useState('');

  const handleCadastro = () => {
    // Lógica para processar o cadastro
    console.log('Nome:', nome);

    // Fechar o modal após o cadastro
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
            placeholder="Despesa/Receita"
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
      <Text style={styles.buttonText}>+Cadastrar</Text>
    </TouchableOpacity>
  );
};

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
    width: '50%',
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
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: '30',
    width: '200px',
    marginTop: '20px',
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
    padding: 10,
    zIndex: 1,
  },
  buttonCadastro:{
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: '20px',
  }
});

export default function () {
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <div style={styles.buttonCadastro}>
      <BotaoModal onPress={handleOpenModal} />
      </div>
      <CadastroModal visible={modalVisible} onClose={handleCloseModal} />
    </View>
  );
}



