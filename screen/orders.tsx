import { useEffect, useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getPortByID, getShipByID } from "../api/ticket.api";
import { Port, Ship, Ticket } from "../model";
import { RootState } from "../redux";
import { cancelOrder } from "../redux/reducers/ticket";
import { DeleteConfirm, TicketCard } from "../shared";

export const OrderScreen: React.FC = () => {
  const { ordered } = useSelector((root: RootState) => root.ticket);

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <FlatList
          keyExtractor={(ticket) => ticket.id}
          renderItem={({ item: ticket }) => (
            <FilteredResult ticket={ticket} onSelect={() => {}} />
          )}
          data={ordered}
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
  const dispatch = useDispatch();

  const { departurePortId, arrivalPortId, shipId } = ticket;

  const [modalVisible, setModalVisible] = useState(false);

  const onYes = () => {
    setModalVisible(false);
    dispatch(cancelOrder(ticket));
  };

  const onNo = () => {
    setModalVisible(false);
  };

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
        setModalVisible(true);
        onSelect(ticket);
      }}
    >
      <DeleteConfirm visible={modalVisible} onYes={onYes} onNo={onNo} />
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
