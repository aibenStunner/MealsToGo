import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name="Main"
      component={() => (
        <View>
          <Text>Account</Text>
        </View>
      )}
    />
    <Stack.Screen
      name="Login"
      component={() => (
        <View>
          <Text>Login</Text>
        </View>
      )}
    />
  </Stack.Navigator>
);
