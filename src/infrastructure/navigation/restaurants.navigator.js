import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/restuarants.screen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-details.screen";

const RestaurantsStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantsStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <RestaurantsStack.Screen
        options={{ headerShown: false }}
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantsStack.Screen
        options={{ headerShown: false }}
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantsStack.Navigator>
  );
};
