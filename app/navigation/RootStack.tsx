import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { AddInspector, TractorList, AddTractor } from "../screens";
import { RootStack } from "./routes.types";
const Stack = createStackNavigator<RootStack>();

export const RootStackRoutes: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TractorList">
        <Stack.Screen
          options={{ header: () => null }}
          name="TractorList"
          component={TractorList}
        />
        <Stack.Screen
          options={{ headerLeft: () => null }}
          name="AddInspection"
          component={AddInspector}
        />
        <Stack.Screen
          options={{ headerLeft: () => null }}
          name="CreateTractor"
          component={AddTractor}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
