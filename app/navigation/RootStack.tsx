import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { AddInspector, TractorList, AddTractor } from "../screens";
import { RootStack } from "./routes.types";
import { TractorDetails } from "../screens/TractorDetails";
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
          options={{
            headerLeft: () => null,
            headerTitle: "New Entry",
            headerTintColor: "#fff",
            headerStyle: { backgroundColor: "#1157B9" },
          }}
          name="AddInspection"
          component={AddInspector}
        />
        <Stack.Screen
          options={{
            headerTitle: "Add Tractor",
            headerTintColor: "#fff",
            headerLeft: () => null,
            headerStyle: { backgroundColor: "#1157B9" },
          }}
          name="CreateTractor"
          component={AddTractor}
        />
        <Stack.Screen
          options={{
            headerTitle: "Details",
            headerTintColor: "#fff",
            headerStyle: { backgroundColor: "#1157B9" },
          }}
          name="TractorDetails"
          component={TractorDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
