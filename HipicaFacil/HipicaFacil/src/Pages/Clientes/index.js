import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

import {useForm, Controller} from 'react-hook-form'


export default function App() {

  const {control, handleSubmit, formState:{errors} } = useForm({})

  function handleSignIn(data){
    console.log(data);

  }


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pagina Home</Text>
    

    {/* <TouchableOpacity style= {styles.button} onPress={handleSubmit(handleSignIn)}>
      <Text style={styles.buttonText}>Acessar</Text>
    </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:25,
    fontWeight: 'bold'
  }
});