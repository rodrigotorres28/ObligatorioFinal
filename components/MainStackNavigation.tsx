import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";

import { MainStack } from "../types/MainStackTypes";
import AllGroupsPage from "../pages/AllGroupsPage";
import GroupPage from "../pages/GroupPage";

interface MainStackNavigationProps {}

const MainStackNavigation = (props: MainStackNavigationProps) => {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="AllGroupsPage">
        <MainStack.Screen
          name="AllGroupsPage"
          component={AllGroupsPage}
          options={{headerTitle: "Copa America Predictions", headerTitleAlign: "center"}}
        />
        <MainStack.Screen
          name="GroupPage"
          component={GroupPage}
          options={{headerTitle: ""}}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigation;