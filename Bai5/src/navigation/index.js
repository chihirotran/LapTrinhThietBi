import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import LoginScreen from "../../screens/login";
import SignInScreen from "../../screens/SignIn";
import SignUpScreen from "../../screens/SignUP";
import ForgotPassword from "../../screens/ForgotPassword";
import HomeScreen from "../../screens/Home";
import DrinkDetailScreen from "../../screens/drinkDetail";
import HomeTab from "./homeTab";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Forgot" component={ForgotPassword} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="HomeTab" component={HomeTab} />
        <Stack.Screen name="DrinkDetailScreen" component={DrinkDetailScreen} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
export default AppNavigation;
