import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Group } from "../types/Group";

export type StackParamList = {
  AllGroupsPage : undefined;
  GroupPage : {group : Group};
  GroupBPage : undefined;
  GroupCPage : undefined;
  GroupDPage : undefined;
};

export const MainStack = createNativeStackNavigator<StackParamList>();
