import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type StackParamList = {
  AllGroupsPage : undefined;
};

export const MainStack = createNativeStackNavigator<StackParamList>();
