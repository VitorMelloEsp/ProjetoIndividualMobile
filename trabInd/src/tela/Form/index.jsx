import { View, Text, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Form = () => {
    const [novoUser, setNovoUser] = useState("");
    const [listaUser, setListaUser] = useState([]);
   

    const addUser = () => {
        
        setListaUser([...listaUser,novoUser])
        setNovoUser('');
    };
        console.log(listaUser);
  return (
    <View style={{flex: 1,backgroundColor:'#121212'}}>
         <StatusBar style='auto'/>
         <TextInput
        value={novoUser}
        onChangeText={setNovoUser}
        style={{
          backgroundColor: "#f1f1f1",
          borderRadius: 10,
          padding: 10,
          marginTop: 50,
          marginBottom: 15,
        }}
        placeholder="Adicione um Username"
      />
      <TouchableOpacity  onPress={addUser} style={{
          backgroundColor: '#1DB954',
          padding: 0,
          borderRadius: 30,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
            <Text style={{ color: 'black', fontSize: 20,fontWeight: "bold" }}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Form