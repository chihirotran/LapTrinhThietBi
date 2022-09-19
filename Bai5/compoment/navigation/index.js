import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import LoginScreen from "../../screens/login";
import SignInScreen from "../../screens/SignIn";
import SignUpScreen from "../../screens/SignUP";
import ForgotPassword from "../../screens/ForgotPassword";
const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="Forgotpassword" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigation;
