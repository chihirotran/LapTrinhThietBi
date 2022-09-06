import React from 'react';
import {Text, View } from 'react-native';


export default function Square(props) {
    return (
          <View style={{backgroundColor: props.color,width:75,height:75,alignItems: 'center',justifyContent: 'center', }}>
          <Text >{props.Text}</Text></View>
    );
  }