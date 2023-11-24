import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Form from '../Form';
import { StatusBar } from 'react-native';

const Login= ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',  backgroundColor:'#121212' }}>
      <StatusBar style='auto'/>
      <View style={{marginBottom: 60}}>
      <Entypo name="spotify" size={90} color="white" />
      </View>
      
      <Text style={{ color:'#f3f3f3' ,fontSize: 16, marginBottom: 5 }}>Milhões de músicas à sua escolha.</Text>
      <Text style={{ color:'#f3f3f3' ,fontSize: 18, marginBottom: 80 }}>Grátis no Spotify.</Text>
     
      <TouchableOpacity
        style={{
          backgroundColor: '#1DB954',
          padding: 0,
          borderRadius: 30,
          width: 300,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={{ color: 'black', fontSize: 20,fontWeight: "bold" }}>Inscreva-se grátis</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#121212',
          marginTop:5,
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 30,
          width: 300,
          height: 50,
          flexDirection: 'row',
          alignItems: 'center' ,
          // justifyContent:"space-around" ,
          
        }}
      > 
        <View style={{padding:10, marginRight: 10, marginLeft: 5}}>
        <MaterialCommunityIcons name="cellphone" size={25} color="white" />
        </View >

        <View style={{alignItems: 'center'}}>
        <Text style={{ color: 'white', fontSize: 16,fontWeight: "bold"}} >Continuar com um número</Text>
        <Text style={{ color: 'white', fontSize: 16,fontWeight: "bold"}} >de telefone</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#121212',
          marginTop:5,
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 30,
          width: 300,
          height: 50,
          flexDirection: 'row',
          alignItems: 'center' ,
          // justifyContent:"space-around" ,
          
        }}
      > 
        <View style={{padding:10, marginRight: 10, marginLeft: 5}}>
        <AntDesign name="google" size={24} color="white" />
        </View >

        <View style={{alignItems: 'center'}}>
        <Text style={{ color: 'white', fontSize: 16,fontWeight: "bold"}} >Continuar com o google</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#121212',
          marginTop:5,
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 30,
          width: 300,
          height: 50,
          flexDirection: 'row',
          alignItems: 'center' ,
          // justifyContent:"space-around" ,
          
        }}
      > 
        <View style={{padding:10, marginRight: 10, marginLeft: 5}}>
        <FontAwesome5 name="facebook" size={24} color="white" />
        </View >

        <View style={{alignItems: 'center'}}>
        <Text style={{ color: 'white', fontSize: 16,fontWeight: "bold"}} >Continuar com o Facebook</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
         onPress={() => navigation.navigate('Form')}
        style={{ marginTop: 20 }}
      >
        <Text style={{ color: 'white', fontWeight: "bold"}}>Entrar</Text>
      </TouchableOpacity>

      
    </View>
  );
};

export default Login;