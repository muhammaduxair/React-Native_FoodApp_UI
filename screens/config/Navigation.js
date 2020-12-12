import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../Home";
import ProDet from "../ProductDetail";

const Stack = createStackNavigator();

function NavigationScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ProductDetail" component={ProDet} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationScreen;
