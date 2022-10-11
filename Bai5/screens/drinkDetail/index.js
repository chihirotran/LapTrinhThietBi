import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView,useEffect } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { MaterialIcons } from '@expo/vector-icons';
import MainButton from "../../src/components/MainButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function DrinkDetailScreen({ navigation, route }) {
  const params = route.params;
  const { item } = params;
  const [apidata, setApidata] = useState([]);
  const [faves, setFaves] = useState([]);
  const onGoBack = () => {
    navigation.goBack();
  };
  // useEffect(function () {
  //   fetch(`http://192.168.0.100:3000/products`)
  //     .then((e) => e.json())
  //     .then((rep) => setApidata(rep))
  //     .catch((err) => {
  //       setApidata([]);
  //     });
  // }, []);
//   const addFave = (apidata) => {
//     const newFavesList = [...faves, apidata];
//     setFaves(newFavesList);
//     navigation.navigate("favScreen");
//     // make this function add to faves array (new array)

// };
// useEffect(() => {
//   setApidata()
// }, [])
  const addTofav = async () => {
    let favData = await axios.getItem("favData");
    if (favData) {
      favData = JSON.parse(favData);
      favData.push({
        id: item.id,
        name: item.name,
        image: item.image,
        price: item.price,
        time: item.time,
        difficult: item.difficult,
        ingredient: item.ingredient,
        guide:item.guide,
      });
    } else {
      favData = [];
      favData.push({
        id: item.id,
        name: item.name,
        image: item.image,
        price: item.price,
        time: item.time,
        difficult: item.difficult,
        ingredient: item.ingredient,
        guide:item.guide,
      });
    }
    AsyncStaxiosorage.setItem("favData", JSON.stringify(favData));
    navigation.navigate("favScreen");
  };
  return (
    <ScrollView style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={{ position: "relative",borderWidth:1 }}>
        <Image
          style={{ width: "100%", height: 300 }}
          source={{ uri: item.image }}
        />
        <TouchableOpacity
          onPress={onGoBack}
          style={{
            backgroundColor: "#ffffff60",
            position: "absolute",
            top: 30,
            left: 12,
            width: 40,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 100,
          }}
        >
          <Ionicons name="chevron-back-outline" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={addTofav}
          style={{
            backgroundColor: "#ffffff60",
            position: "absolute",
            top: 30,
            left: 350,
            width: 40,
            height: 40,
            direction:'rtl',
            borderRadius: 100,
          }}
        >
          <MaterialIcons name="favorite-outline" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ paddingHorizontal: 12, marginTop: 12 }}>
        <Text style={{ fontSize: 35, fontWeight: "bold",marginBottom:20 }}>{item.name}</Text>
        <View>
          <View>
            <Text style={{ fontSize: 20 }}>Thời Gian Nấu: {item.time} </Text>
          </View>
          <View>
            <Text style={{ fontSize: 20}}>Độ Khó: {item.difficult}</Text>
          </View>
          <View>
            <Text style={{ fontSize: 20}}>Chi Chí: {item.price}VND</Text>
          </View>
        </View>
        <Text
          style={{
            color: "#000",
            fontSize: 20,
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          Nguyên Liệu 
        </Text>
        <Text
          style={{
            color: "gray",
          }}
        >
          {item.ingredient}
        </Text>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <View>
            <View
              style={{
                color: "#000",
            fontSize: 20,
            fontWeight: "bold",
            marginTop: 10,
                
              }}
            >
              <Text style={{
                color: "#000",
            fontSize: 20,
            fontWeight: "bold",
            marginTop: 10}}>Hướng Dẫn</Text>
            <Text style={{lineHeight:25}}>{item.guide}</Text>
            </View>
            {/* <View
              style={{
                backgroundColor: "#F4F4F4",
                paddingHorizontal: 16,
                borderRadius: 100,
                marginTop: 4,
                width: 150,
                paddingVertical: 8,
                flexDirection: "row",
              }}
            >
              <Text style={{ color: "#000", flex: 1 }}>{number}</Text>
            </View> */}
          </View>
          
        </View>
        
      </View>
    </ScrollView>
  );
}
