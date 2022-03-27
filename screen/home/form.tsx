import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { ClassType, DefaultServiceClasses } from "../../model";
import { RootState } from "../../redux";
import {
  setDerpatureDate,
  setPassenger,
  setServiceClass,
} from "../../redux/reducers/order";
import { HomeStackParamList } from "../../router";
import {
  Button,
  DisableTextInput,
  Icon,
  InputDate,
  InputOptions,
  TextInput,
} from "../../shared";
import { OptionItem } from "../../shared/input-option";

export const FormSubScreen: React.FC = () => {
  const [selectedService, setSelectedService] = useState<
    OptionItem | undefined
  >(undefined);

  const [selectedDate, setSelectedDate] = useState<string>("");
  const [numPassegers, setNumPassengers] = useState(1);

  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();
  const dispatch = useDispatch();

  const { derpature, arrival } = useSelector((root: RootState) => root.order);

  const handleSearchTicket = () => {
    navigation.navigate("HomeFiltered");
  };

  const handleOnSearch = (target: "derpature" | "arrival") => {
    navigation.navigate("HomeSearch", { target: target });
  };

  const handleOnChangePassenger = (updates: string) => {
    const n = parseInt(updates);
    if (!isNaN(n) && n > 1) {
      setNumPassengers(n);
      dispatch(setPassenger(n));
    } else {
      setNumPassengers(1);
      dispatch(setPassenger(1));
    }
  };

  const handleOnChangeDepatureDate = (date: Date) => {
    setSelectedDate(date.toLocaleDateString());
    dispatch(setDerpatureDate(date.toDateString()));
  };

  const handleOnChangeServiceClass = (updates: OptionItem) => {
    setSelectedService(updates);
    dispatch(setServiceClass(updates.value as ClassType));
  };

  const serviceClases = Object.keys(DefaultServiceClasses).map((key) => {
    const label = DefaultServiceClasses[key as ClassType].id;
    const value = key;
    return { label, value };
  });

  return (
    <View style={styles.container}>
      <View style={styles.background} />
      <View style={styles.form}>
        <Text style={styles.hero}>Kapalzy</Text>
        <DisableTextInput
          placeholder="pilih pelabuhan asal"
          label="Asal"
          iconFactory={(focused) => <Icon focused={focused} name="ship" />}
          onPress={() => handleOnSearch("derpature")}
          value={derpature ? derpature.name : ""}
        />
        <DisableTextInput
          placeholder="pilih pelabuhan tujuan"
          label="Tujuan"
          iconFactory={(focused) => <Icon focused={focused} name="ship" />}
          onPress={() => handleOnSearch("arrival")}
          value={arrival ? arrival.name : ""}
        />
        <InputOptions
          label="Layanan"
          iconFactory={(focused) => <Icon focused={focused} name="ship" />}
          options={serviceClases}
          selected={selectedService}
          onSelect={(v) => handleOnChangeServiceClass(v)}
        />
        <InputDate
          label="Taggal Keberangkatan"
          mode="date"
          iconFactory={(focused) => <Icon focused={focused} name="ship" />}
          onChange={handleOnChangeDepatureDate}
          value={selectedDate}
        />

        <TextInput
          label="Jumlah Penumpang"
          iconFactory={(focused) => <Icon focused={focused} name="ship" />}
          onChangeText={handleOnChangePassenger}
          value={numPassegers.toString()}
          mode="decimal-pad"
        />

        <Button title="Cari Tiket" onPress={() => handleSearchTicket()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    display: "flex",
    flex: 1,
    backgroundColor: "#1A202C",
    width: "100%",
    position: "absolute",
    top: 0,
    right: 0,
    height: "50%",
    borderBottomEndRadius: 60,
    borderBottomLeftRadius: 60,
  },

  hero: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 18,
    textAlign: "center",
  },
  form: {
    marginVertical: 40,
    width: 360,
    display: "flex",
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 16,
    shadowColor: "#1A202C",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 2,
  },
});
