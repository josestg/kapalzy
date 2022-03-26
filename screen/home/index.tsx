import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { HomeStackParamList } from "../../router";
import { FilteredSubScreen } from "./filtered";
import { FormSubScreen } from "./form";
import { PreviewSubScreen } from "./preview";
import { SearchSubScreen } from "./search";
import { SummarySubScreen } from "./summary";

import * as ports from "../../redux/reducers/port";
import * as tickets from "../../redux/reducers/ticket";
import { fetchAllPort, fetchAllTicket } from "../../api/ticket.api";
import { useDispatch } from "react-redux";

const Stack = createNativeStackNavigator<HomeStackParamList>();

export const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchAllTicket().then((data) => dispatch(tickets.setMaster(data)));
  }, []);

  useEffect(() => {
    fetchAllPort().then((data) => dispatch(ports.setMaster(data)));
  });

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={"HomeForm"} component={FormSubScreen} />
      <Stack.Screen name={"HomeSearch"} component={SearchSubScreen} />
      <Stack.Screen name={"HomePreview"} component={PreviewSubScreen} />
      <Stack.Screen name={"HomeSummary"} component={SummarySubScreen} />
      <Stack.Screen name="HomeFiltered" component={FilteredSubScreen} />
    </Stack.Navigator>
  );
};
