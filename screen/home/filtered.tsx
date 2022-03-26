import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import { fetchAllTicket, getPortByID, getShipByID } from "../../api/ticket.api";
import { Port, Ship, Ticket } from "../../model";
import { HomeStackParamList } from "../../router";
import { TicketCard } from "../../shared";

export const FilteredSubScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();
  const dispatch = useDispatch();

  const [tickets, setTickets] = useState<Ticket[]>();

  useEffect(() => {
    fetchAllTicket().then(setTickets);
  }, []);

  const handleOnSelect = (ticket: Ticket) => {};

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.top}>
          <Text style={styles.header}>Tiket Tersedia</Text>
          <Button title="Kembali" onPress={() => navigation.goBack()} />
        </View>
        <FlatList
          keyExtractor={(ticket) => ticket.id}
          renderItem={({ item: ticket }) => (
            <SearchResult ticket={ticket} onSelect={handleOnSelect} />
          )}
          data={tickets}
        />
      </View>
    </View>
  );
};

interface SearchResultProps {
  ticket: Ticket;
  onSelect: (t: Ticket) => void;
}

const SearchResult: React.FC<SearchResultProps> = ({ ticket, onSelect }) => {
  const [depaturePort, setDepaturePort] = useState<Port | null>(null);
  const [arrivalPort, setArrivalPort] = useState<Port | null>(null);
  const [ship, setShip] = useState<Ship | null>(null);

  const { departurePortId, arrivalPortId, shipId } = ticket;

  useEffect(() => {
    getPortByID(departurePortId).then(setDepaturePort);
  }, [departurePortId]);

  useEffect(() => {
    getPortByID(arrivalPortId).then(setArrivalPort);
  }, [arrivalPortId]);

  useEffect(() => {
    getShipByID(shipId).then(setShip);
  }, [shipId]);

  return (
    <TouchableOpacity onPress={() => onSelect(ticket)}>
      <TicketCard
        ticket={ticket}
        derpature={depaturePort!!}
        arrival={arrivalPort!!}
        ship={ship!!}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    padding: 16,
  },
  form: {
    width: "100%",
    display: "flex",
    marginBottom: 38,
  },
  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
