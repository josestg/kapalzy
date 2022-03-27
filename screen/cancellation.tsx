import { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import { getPortByID, getShipByID } from "../api/ticket.api";
import { Port, Ship, Ticket } from "../model";
import { RootState } from "../redux";
import { Icon, TicketCard } from "../shared";

export const CancellationScreen: React.FC = () => {
  const { canceled } = useSelector((root: RootState) => root.ticket);

  if (canceled.length === 0) {
    return (
      <View style={styles.notFound}>
        <Icon focused name="ticket" size={80} />
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
          Tidak ada yang dibatalkan
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <FlatList
          keyExtractor={(ticket) => ticket.id}
          renderItem={({ item: ticket }) => (
            <FilteredResult ticket={ticket} onSelect={() => {}} />
          )}
          data={canceled}
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
    <TouchableOpacity
      onPress={() => {
        onSelect(ticket);
      }}
    >
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
  notFound: {
    display: "flex",
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: "100%",
    display: "flex",
  },
  searchResult: {
    borderWidth: 1,
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
  },

  location: {
    fontWeight: "bold",
    fontSize: 12,
  },
});
