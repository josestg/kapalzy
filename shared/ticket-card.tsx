import { View, Text, StyleSheet } from "react-native";
import { Port, Ship, Ticket } from "../model";

import { Icon } from "./icon";

interface TicketCardProps {
  ticket: Ticket;
  derpature: Port | null;
  arrival: Port | null;
  ship: Ship | null;
}

export const TicketCard: React.FC<TicketCardProps> = ({
  ticket,
  arrival,
  derpature,
  ship,
}) => {
  if (derpature === null || arrival === null || ship === null) {
    return (
      <View style={styles.container}>
        <Text>Loading....</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{derpature.name}</Text>
        <Icon name="ship" focused={false} />
        <Text style={styles.headerText}>{arrival.name}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.title}>Jadwal Masuk Pelabuhan</Text>
        <Text>{ticket.departureDate}</Text>
        <Text>{ticket.derpatureTime[0]}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.title}>Layanan</Text>
        <Text>{ship.classes.business.name}</Text>
      </View>
      <View style={styles.line} />
      <View style={styles.price}>
        <Text>
          {" "}
          {ship.classes.business.price.currency}{" "}
          {ship.classes.business.price.ammount}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    padding: 8,
    borderRadius: 8,
    marginVertical: 16,
    width: "100%",
  },

  title: {
    fontWeight: "bold",
  },

  line: {
    borderBottomWidth: 3,
  },

  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
  },

  headerText: {
    fontSize: 16,
    fontWeight: "bold",
  },

  box: {
    padding: 8,
  },

  price: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

    padding: 6,
  },
});
