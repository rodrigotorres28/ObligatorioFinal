import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type StackParamList = {
  AllGroupsPage : undefined;
  GroupPage : { groupName: string };
};

export const MainStack = createNativeStackNavigator<StackParamList>();
