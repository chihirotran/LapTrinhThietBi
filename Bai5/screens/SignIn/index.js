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
  TouchableOpacity
} from 'react-native';
import Btns from '../../compoment/btn';
import Ips from '../../compoment/input';
import Ipspass from '../../compoment/inputpass';
import Logos from '../../compoment/logo';
import Btnback from '../../compoment/btnback';

export default function SignInScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.btnback} ><Btnback color='#81d3e3' Text='Sign Ip' onPress={() => {navigation.goBack() }} >  </Btnback></View>
      {/* <View style={styles.btnback}><TouchableOpacity onPress={() => { navigation.goBack() }} >
        <Image source={require('../../img/BackMini.png')}></Image>
      </TouchableOpacity></View> */}
      <View style={styles.viewtop}>
        <Text style={styles.titleText}>Sign In</Text></View>
      <View style={styles.viewtop1}>
        <Ips Text="Email" placeholder="TK" /></View>
      <View style={styles.viewtop1}>
        <Ipspass Text="Password" placeholder="Pass" /></View>
      <View style={styles.btn}>
        <Btns color='#81d3e3' Text='Sign Ip'></Btns>
        {/* <Text style={styles.ortext}>OR</Text> */}
        <Btns color='#81d3e3' Text='facebook Login'></Btns>
        <Btns color='#81d3e3' Text='Forgot Password' onPress={() => { navigation.navigate("Forgot") }}></Btns>
        {/* <View style={{margin: 10}}><TouchableOpacity onPress={() => {navigation.push('Forgotpassword') }} style={styles.BtnC}>
        <Text>Forgot Password</Text>
      </TouchableOpacity></View> */}
        </View>
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
  BtnC:{
    backgroundColor: "#81d3e3",
        paddingHorizontal: 80,
        paddingVertical: 15,
        borderRadius: 30,
        alignItems: "center",
  },
  btnback: {
    alignSelf: 'flex-start',
    marginTop: 20
  },
  titleText: {
    fontSize: 50,
    // fontWeight: "bold"
    color: 'blue'

  },
  tText: {
    fontSize: 20,


  },
  viewtop: {
    margin: 50

  },
  viewtop1: {
    margin: 8
  },
  ortext: {
    fontSize: 40,
    fontWeight: "bold",
    margin: 20,
    alignItems: 'center'
  },
  btn: {
    // justifyContent: "center",

    paddingHorizontal: 10,

  }

});


