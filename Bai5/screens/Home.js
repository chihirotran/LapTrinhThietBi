import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState,Component  } from 'react';
import { FlatList, ScrollView, StatusBar, Text, View, SafeAreaView } from 'react-native';
import DrinkItem from '../src/components/DrinkItem';
import data from '../src/data/drinks.json';
import dataList from "../src/data/data";
import styles from './styles';
import Btns from "../src/btn";
import axios from 'axios'
import Swiper from 'react-native-swiper';

function HomeScreen({ navigation }) {
  const [user, setuser] = useState(null);
  const [apidata, setApidata] = useState([]);
  const renderItem = ({ item, index }) => {
    return <DrinkItem item={item} index={index} navigation={navigation} />;
  };
  const logOut = async () => {
    const res = await axios.get(
      `http://10.0.60.171:3000/user`
    );
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };
  const getapi = ()=>{
    axios.get(`http://10.0.60.171:3000/products`).then((Response)=> {
      setApidata(Response.data);
    });
  };

  useEffect(function () {
    fetch(`http://10.0.60.171:3000/products`)
      .then((e) => e.json())
      .then((rep) => setApidata(rep))
      .catch((err) => {
        setApidata([]);
      });
  }, []);
  // componentDidMount() {
  //   axios.get(`http://192.168.0.100:3000/products`)
  //     .then(res => {
  //       const products = res.data;
  //       this.setState({ products });
  //     })
  //     .catch(error => console.log(error));
  // }
  // const getUserData = async () => {
  //   // let curUser = await AsyncStorage.getItem('curUser');
  //   // curUser = JSON.parse(curUser);
  //   // setuser(curUser);
  //   try {
  //     const res = await axios.get(
  //       `http://192.168.0.100:3000/user`
  //     );
  //     // if (res.data.Email == Email.trim()) {
  //     //   alert("Email đã được đăng ký!");
  //     //   return;
  //     // } else {
  //     //   const res = await axios.post("http://192.168.0.100:3000/user/", {
  //     //     Name: Name.trim(),
  //     //     Email: Email.trim(),
  //     //     password: password.trim(),
  //     //     Phone: Phone.trim(),
  //     //   });
  //     //   alert("Đăng ký thành công!");
  //     //   navigation.goBack();
  //     // }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <ScrollView>
      <View style={{marginTop:35}}><Text>Thanh TImf Kiem</Text></View>
      <View style={{height:200}}><Swiper style={styles.wrapper} showsButtons>
  <View style={styles.slide1}>
    <Text style={styles.text}>Network Booster</Text>
  </View>
  <View style={styles.slide2}>
    <Text style={styles.text}>VPN Secure</Text>
  </View>
  <View style={styles.slide3}>
    <Text style={styles.text}>Easy User</Text>
  </View>
</Swiper></View>
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>Các Món Có Thể Bạn Sẽ Thích</Text>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={true}
          numRow = {2}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
        /></View>
    <View style={styles.sectionContainer}>
    {data === "" ? (
      <Text style={styles.loadingText}>Loading...</Text>
    ) : (
      
      <FlatList
        data={data}
        // renderItem={({ item }) => <Item name={item.name} />}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns = {2}
      />
    )}
  </View>
  </ScrollView>
    // <ScrollView 
    //   style={{
    //     backgroundColor: '#fff',
    //     paddingHorizontal: 12,
    //     marginTop: StatusBar.currentHeight + 10,
    //   }}
    // >
    //   {/* <Text style={{ marginTop: 20, fontSize: 22 }}>{`Chào, ${
    //     res && res.name
    //   }!`}</Text> */}
    //   <View
    //     style={{
    //       backgroundColor: '#67E5CE',
    //       padding: 20,
    //       borderRadius: 12,
    //       marginTop: 20,
    //     }}
    //   >
    //     <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
    //       <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>
    //         App Hướng Dẫn Nấu Ăn
    //       </Text>
    //       <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>
    //         Cho Người Mới
    //       </Text>
    //     </View>
    //   </View>
      // <View style={styles.sectionContainer}>
      //   <Text style={styles.title}>Các Món Có Thể Bạn Sẽ Thích</Text>
      //   <FlatList
      //     data={apidata}
      //     horizontal
      //     showsHorizontalScrollIndicator={true}
      //     keyExtractor={(item, index) => item + index}
      //     renderItem={renderItem}
      //   />
      // </View>
    //   <View style={styles.sectionContainer}>
    //     <Text style={styles.title}>Có thể bạn sẽ thích</Text>
    //     <FlatList
    //       data={apidata}
    //       horizontal
    //       showsHorizontalScrollIndicator={false}
    //       keyExtractor={(item, index) => item + index}
    //       renderItem={renderItem}
    //     />
    //   <SafeAreaView style={styles.container}>
    //   <FlatList
    //     data={apidata}
    //     renderItem={renderItem}
    //     keyExtractor={item => item.id}
    //   />
    // </SafeAreaView>
    //   </View>
    //   <View>
    //       {/* <View style={styles.btnback} ><Btnback color='#81d3e3' Text='Sign Ip' onPress={() => {navigation.goBack() }}></Btnback></View> */}
    //       <Btns color="#8e64a1" Text='Log Out' onPress={logOut}></Btns>
          
    //     </View>
    // </ScrollView>
    

  );
}
export default HomeScreen;