import React, { useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTicket } from "../api/ticket.api";
import { RootState } from "../redux";
import * as ticketReducer from "../redux/reducers/ticket";

export const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();

  const { state: tickets } = useSelector((root: RootState) => root.ticket);

  useEffect(() => {
    dispatch(ticketReducer.setLoading(true));
    fetchAllTicket()
      .then((tickets) => dispatch(ticketReducer.setMaster(tickets)))
      .catch((error) => dispatch(ticketReducer.setError(error)))
      .finally(() => dispatch(ticketReducer.setLoading(false)));
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <FlatList
        data={tickets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <Text>{item.id}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
