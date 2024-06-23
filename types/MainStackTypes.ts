import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type StackParamList = {
  AllGroupsPage : undefined;
  GroupAPage : undefined;
  GroupBPage : undefined;
  GroupCPage : undefined;
  GroupDPage : undefined;
};

export const MainStack = createNativeStackNavigator<StackParamList>();
