import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";

import { MainStack } from "../types/MainStackTypes";
import AllGroupsPage from "../pages/AllGroupsPage";
import GroupAPage from "../pages/GroupAPage";
import GroupBPage from "../pages/GroupBPage";
import GroupCPage from "../pages/GroupCPage";
import GroupDPage from "../pages/GroupDPage";

interface MainStackNavigationProps {}

const MainStackNavigation = (props: MainStackNavigationProps) => {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="AllGroupsPage">
        <MainStack.Screen
          name="AllGroupsPage"
          component={AllGroupsPage}
        />
        <MainStack.Screen
          name="GroupAPage"
          component={GroupAPage}
        />
        <MainStack.Screen
          name="GroupBPage"
          component={GroupBPage}
        />
        <MainStack.Screen
          name="GroupCPage"
          component={GroupCPage}
        />
        <MainStack.Screen
          name="GroupDPage"
          component={GroupDPage}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigation;