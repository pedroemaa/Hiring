import  React  from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TextInput , Button , TouchableOpacity, NavigationContainer , useState } from 'react-native';
import ButtonLogin from './ButtonLogin';
import ButtonCrearCuenta from './Buttoncrearcuenta';
import CambiarContraseña from './CambiarContraseña';

function LoginScreen({ navigation }) {
  
  
    const handleLogin = () => {
   
    };
  
    const handleRegister = () => {
      navigation.navigate('CrearCuenta');
    };

    const handleCambiarContraseña = () => {
        navigation.navigate('CambiarContraseña');
      };
  
    return (
     /* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput
          placeholder="Nombre de usuario"
          
          style={{ marginBottom: 10, paddingHorizontal: 10, height: 40, borderColor: 'gray', borderWidth: 1 }}
        />
        <TextInput
          placeholder="Contraseña"
     
          style={{ marginBottom: 10, paddingHorizontal: 10, height: 40, borderColor: 'gray', borderWidth: 1 }}
        />
        <TouchableOpacity title="Iniciar sesión" onPress={handleLogin} />
        <TouchableOpacity title="Registrarse" onPress={handleRegister} color="green"  style={{ background:"blue", color:"white",}} />
      </View>
*/

<View style={styles.container}>
      <Text style={styles.txtlogin}>Login</Text>
      <TextInput style={styles.inputlogin} placeholder="Usuario"/>
      <TextInput style={styles.inputlogin} placeholder="Contraseña"/>
       <ButtonLogin/>
       
      
        <TouchableOpacity onPress={handleRegister} style={styles.buttonlogincrearcuenta}>

           <Text style={styles.txtcrearcuenta}>CrearCuenta</Text>


        </TouchableOpacity>

      

      <TouchableOpacity onPress={handleCambiarContraseña} style={styles.buttonlogincambiarcontraseña}>

           <Text>¿Has olvidado la contraseña?</Text>


      </TouchableOpacity>


        <TouchableOpacity >

          <Text style={styles.txtopciones}></Text>

        </TouchableOpacity>

      <StatusBar style="auto" />
    </View> 









    );
  }


  export default LoginScreen;





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
       ,

     buttonlogincrearcuenta : {

        fontSize:20,
        marginTop: 50,
        backgroundColor:"#43DE48",
        padding:25,
        borderRadius:30,
        width:"40%",
        textAlign:"center",
      

      }
      ,
      buttonlogincambiarcontraseña : {

        fontSize:20,
        marginTop: 50,


      }
      ,

      txtcrearcuenta:{


       color:"white",
       fontSize:15 ,
      
      }



  });