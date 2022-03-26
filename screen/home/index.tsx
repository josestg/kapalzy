import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { ScreenNames } from "../../model";
import { FormSubScreen } from "./form";
import { PreviewubScreen } from "./preview";
import { SummarySubScreen } from "./summary";

const Stack = createNativeStackNavigator();

export const HomeScreen: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ScreenNames["HomeForm"]} component={FormSubScreen} />
      <Stack.Screen
        name={ScreenNames["HomePreview"]}
        component={PreviewubScreen}
      />
      <Stack.Screen
        name={ScreenNames["HomeSummary"]}
        component={SummarySubScreen}
      />
    </Stack.Navigator>
  );
};
