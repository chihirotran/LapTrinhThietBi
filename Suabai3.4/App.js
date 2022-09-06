import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,Alert } from 'react-native';
import Square from './compoment/square';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={style1.container}>
      <Square color="red" Text="quare1"></Square>
        <Square color="blue" Text="quare2"></Square>
        <Square color="pink" Text="quare3"></Square>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f5f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const style1 = StyleSheet.create({
  container: {
    
    backgroundColor: '#f7f5f7',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection:'row',
    width:400,
    height:700,
  },
  square1:{
    backgroundColor: '#6fcbf2',
    width:75,
    height:75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  square2:{
    backgroundColor: '#036c99',
    width:75,
    height:75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  square3:{
    backgroundColor: '#d143ca',
    width:75,
    height:75,
    alignItems: 'center',
    justifyContent: 'center',
  },
});