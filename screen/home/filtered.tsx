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
import { useDispatch, useSelector } from "react-redux";
import { getPortByID, getShipByID } from "../../api/ticket.api";
import { Port, Ship, Ticket } from "../../model";
import { RootState } from "../../redux";
import { searchTicket } from "../../redux/reducers/ticket";
import { HomeStackParamList } from "../../router";
import { TicketCard } from "../../shared";

export const FilteredSubScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();
  const dispatch = useDispatch();

  const { state: tickets, searchResult } = useSelector(
    (root: RootState) => root.ticket
  );
  const { derpature, arrival, derpatureDate } = useSelector(
    (root: RootState) => root.order
  );

  useEffect(() => {
    dispatch(
      searchTicket({
        arrivalPortId: arrival?.id,
        departurePortId: derpature?.id,
        departureDate: derpatureDate,
      })
    );
  }, [dispatch, arrival, derpature, derpatureDate]);

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
            <FilteredResult ticket={ticket} onSelect={handleOnSelect} />
          )}
          data={searchResult}
        />
      </View>
    </View>
  );
};

interface FilteredResultProps {
  ticket: Ticket;
  onSelect: (t: Ticket) => void;
}

const FilteredResult: React.FC<FilteredResultProps> = ({
  ticket,
  onSelect,
}) => {
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
