import  React  from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Dimensions , Button , TouchableOpacity} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import  ButtonLogin  from './ButtonLogin.js';
import  CambiarContraseña  from './CambiarContraseña.js';
import  ButtonCrearCuenta  from './Buttoncrearcuenta.js';
import  CrearCuenta  from './Crearcuenta.js';
import LoginScreen from './LoginScreen.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



/*function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Ir a Detalles"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     
    </View>
  );
}

*/




const Stack = createNativeStackNavigator()

function App() {
  return(
  /*  <View style={styles.container}>
      <Text style={styles.txtlogin}>Login</Text>
      <TextInput style={styles.inputlogin} placeholder="Usuario"/>
      <TextInput style={styles.inputlogin} placeholder="Contraseña"/>
       <ButtonLogin/>
       

        

      

      <CambiarContraseña />


        <TouchableOpacity >

          <Text style={styles.txtopciones}></Text>

        </TouchableOpacity>

      <StatusBar style="auto" />
    </View> */


  


    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="CrearCuenta" component={CrearCuenta} />
    <Stack.Screen name="CambiarContraseña" component={CambiarContraseña} />
    </Stack.Navigator>
  </NavigationContainer>








  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputlogin: {
    borderWidth: 1,
    borderColor:"gray",
    padding:10,
    width:"80%",
    marginTop:20,
    height:50,
    borderRadius:30,
    backgroundColor:"white",
    paddingStart:30,
  },
 txtlogin:{
fontSize:50


 },

 txtbuttoncrearcuenta: 
 {

 fontSize:20,
 marginTop: 50,




 }
});
