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
import Ipspass from '../../compoment/inputpass';
import Logos from '../../compoment/logo';
import Btnback from '../../compoment/btnback';

export default function SignInScreen(){
    return (
        <View style={styles.container}>
          <View style={styles.btnback} ><Btnback color='#81d3e3' Text='Sign Ip'></Btnback></View>
            <View style={styles.viewtop}>
            <Text style={styles.titleText}>Sign In</Text></View>
            <View style={styles.viewtop1}>
            <Ips Text="Email" placeholder="TK" /></View>
            <View style={styles.viewtop1}>
            <Ipspass Text="Password" placeholder="Pass"/></View>
            <View style={styles.btn}>
            <Btns color='#81d3e3' Text='Sign Ip'></Btns>
            {/* <Text style={styles.ortext}>OR</Text> */}
            <Btns color='#81d3e3' Text='facebook Login'></Btns></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '',
      alignItems: 'center',
      // justifyContent: 'center',
      
    },
    btnback:{
      alignSelf: 'flex-start',
      marginTop:20    },
    titleText: {
        fontSize: 50,
        // fontWeight: "bold"
        color: 'blue'
        
      },
    tText: {
        fontSize: 20,
        
        
      },
    viewtop:{
        margin:50 
        
    },
    viewtop1:{
        margin:8
    },
    ortext:{
    fontSize: 40,
    fontWeight: "bold",
    margin:20,
    alignItems:'center'
    },
    btn:{
    // justifyContent: "center",
    
    paddingHorizontal: 10,
    
    }

  });


