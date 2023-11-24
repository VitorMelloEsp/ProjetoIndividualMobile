import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from '../tela/Login'
import Form from '../tela/Form';

const Stack = createNativeStackNavigator();

const Rotas = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
  
      <Stack.Screen name="Login" component={Login} options={{
            headerShown: false ,}} />
      <Stack.Screen name="Form" component={Form}options={{
            headerShown: false ,}}/>      
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Rotas

