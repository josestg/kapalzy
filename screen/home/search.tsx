import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import { fetchAllPort } from "../../api/ticket.api";
import { Port } from "../../model";
import { HomeStackParamList } from "../../router";
import { Icon, TextInput } from "../../shared";
import * as orderReducer from "../../redux/reducers/order";

export const SearchSubScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();

  const route = useRoute<RouteProp<HomeStackParamList, "HomeSearch">>();

  const dispatch = useDispatch();

  const [ports, setPorts] = useState<Port[]>();
  const [filtered, setFiltered] = useState<Port[]>();

  useEffect(() => {
    fetchAllPort().then(setPorts);
  }, []);

  const handleOnSearch = (name: string) => {
    if (name.length === 0) {
      setFiltered([]);
      return;
    }

    if (ports) {
      const matches = ports.filter((p) =>
        p.name.toLowerCase().includes(name.toLowerCase())
      );
      setFiltered([...matches]);
    }
  };

  const handleOnSelect = (port: Port) => {
    const action =
      route.params?.target === "arrival"
        ? orderReducer.setArrival(port)
        : orderReducer.setDerpature(port);
    dispatch(action);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          label="Cari Pelabuhan"
          iconFactory={(focused) => <Icon focused={focused} name="ship" />}
          onChangeText={handleOnSearch}
          placeholder="cari nama pelabuhan..."
        />

        <FlatList
          keyExtractor={(port) => port.id}
          renderItem={({ item: port }) => (
            <SearchResult port={port} onSelect={handleOnSelect} />
          )}
          data={filtered}
        />
      </View>
    </View>
  );
};

interface SearchResultProps {
  port: Port;
  onSelect: (p: Port) => void;
}

const SearchResult: React.FC<SearchResultProps> = ({ port, onSelect }) => {
  return (
    <TouchableOpacity onPress={() => onSelect(port)}>
      <View style={styles.searchResult}>
        <Text style={styles.location}>{port.location.province}</Text>
        <Text>{port.name}</Text>
      </View>
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
