import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { HomeStackParamList } from "../../router";
import { FormSubScreen } from "./form";
import { PreviewSubScreen } from "./preview";
import { SearchSubScreen } from "./search";
import { SummarySubScreen } from "./summary";

const Stack = createNativeStackNavigator<HomeStackParamList>();

export const HomeScreen: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={"HomeForm"} component={FormSubScreen} />
      <Stack.Screen name={"HomeSearch"} component={SearchSubScreen} />
      <Stack.Screen name={"HomePreview"} component={PreviewSubScreen} />
      <Stack.Screen name={"HomeSummary"} component={SummarySubScreen} />
    </Stack.Navigator>
  );
};
