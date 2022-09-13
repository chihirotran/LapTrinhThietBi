import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    Image,
    Text,
    View,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
  } from 'react-native';
import Btns from '../../compoment/btn';
import Ips from '../../compoment/input';
import Logos from '../../compoment/logo';
export default function LoginScreen(){
    return (
        <View style={styles.container}>
            <Logos></Logos>
            <View style={styles.viewtop}><Text style={styles.titleText}>Welcone to your</Text></View>
            <Text style={{marginBottom:15}}>Welcone to your app. Build your own social network in minutes</Text>
            <Btns color="#81d3e3" Text='Log In'></Btns>
            <Btns color="#8e64a1" Text='Sign Up'></Btns>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'column',
    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        color: 'blue'
        
      },
    tText: {
        fontSize: 20,
        margin:10,
        
      },
    viewtop:{
        margin:20
    }
  });
