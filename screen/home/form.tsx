import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { ClassType, DefaultServiceClasses } from "../../model";
import { RootState } from "../../redux";
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

  const { derpature, arrival } = useSelector((root: RootState) => root.order);

  const handleSearchTicket = () => {
    navigation.navigate("HomeFiltered");
  };

  const handleOnSearch = (target: "derpature" | "arrival") => {
    navigation.navigate("HomeSearch", { target: target });
  };

  const serviceClases = Object.keys(DefaultServiceClasses).map((key) => {
    const label = DefaultServiceClasses[key as ClassType].id;
    const value = key;
    return { label, value };
  });

  return (
    <View style={styles.container}>
      <View style={styles.form}>
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
          onSelect={setSelectedService}
        />
        <InputDate
          label="Taggal Keberangkatan"
          mode="date"
          iconFactory={(focused) => <Icon focused={focused} name="ship" />}
          onChange={(d) => setSelectedDate(d.toLocaleDateString())}
          value={selectedDate}
        />

        <TextInput
          label="Jumlah Penumpang"
          iconFactory={(focused) => <Icon focused={focused} name="ship" />}
          onChangeText={(v: string) => {
            const n = parseInt(v);
            if (!isNaN(n) && n > 1) {
              setNumPassengers(n);
            } else {
              setNumPassengers(1);
            }
          }}
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
    padding: 16,
  },
  form: {
    width: "100%",
    display: "flex",
  },
});
