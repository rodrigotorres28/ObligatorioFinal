import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";

import { MainStack } from "../types/MainStackTypes";
import AllGroupsPage from "../pages/AllGroupsPage";

interface MainStackNavigationProps {}

const MainStackNavigation = (props: MainStackNavigationProps) => {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="AllGroupsPage">
        <MainStack.Screen
          name="AllGroupsPage"
          component={AllGroupsPage}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigation;