import React, { useState } from 'react';
import { View, Text, Button, Modal, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const Insumos = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [supplies, setSupplies] = useState([]);
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleSave = () => {
    if (itemName && quantity) {
      if (editIndex !== null) {
        const updatedSupplies = [...supplies];
        updatedSupplies[editIndex] = { itemName, quantity };
        setSupplies(updatedSupplies);
        setEditIndex(null);
      } else {
        setSupplies([...supplies, { itemName, quantity }]);
      }
      setItemName('');
      setQuantity('');
      setModalVisible(false);
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  const handleEdit = (index) => {
    const supplyToEdit = supplies[index];
    setItemName(supplyToEdit.itemName);
    setQuantity(supplyToEdit.quantity);
    setEditIndex(index);
    setModalVisible(true);
  };

  const handleDelete = (index) => {
    const updatedSupplies = supplies.filter((_, i) => i !== index);
    setSupplies(updatedSupplies);
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.item}>
      <View>
        <Text>Item: {item.itemName}</Text>
        <Text>Quantidade: {item.quantity}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => handleEdit(index)}>
          <Text style={styles.editButton}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete(index)}>
          <Text style={styles.deleteButton}>Excluir</Text>
        </TouchableOpacity>
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
              placeholder="Nome do item"
              value={itemName}
              onChangeText={setItemName}
            />
            <TextInput
              style={styles.input}
              placeholder="Quantidade"
              value={quantity}
              onChangeText={setQuantity}
              keyboardType="numeric"
            />
            <View style={styles.buttonsContainer}>
              <Button title="Cancelar" onPress={() => {
                setItemName('');
                setQuantity('');
                setEditIndex(null);
                setModalVisible(false);
              }} color="gray" />
              <Button title="Salvar" onPress={handleSave} />
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity style={styles.button} onPress={() => {
        setItemName('');
        setQuantity('');
        setEditIndex(null);
        setModalVisible(true);
      }}>
        <Text style={styles.buttonText}>Adicionar Item</Text>
      </TouchableOpacity>
      <FlatList
        data={supplies}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  editButton: {
    color: 'green',
    marginRight: 10,
  },
  deleteButton: {
    color: 'red',
  },
});

export default Insumos;
