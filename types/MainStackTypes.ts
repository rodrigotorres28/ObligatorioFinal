import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type StackParamList = {
  AllGroupsPage: undefined;
  GroupPage: { groupName: string };
  BracketPage: undefined;
};

export const MainStack = createNativeStackNavigator<StackParamList>();
