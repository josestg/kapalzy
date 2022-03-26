import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { HomeStackParamList } from "../../router";
import { Button, Icon, DisableTextInput } from "../../shared";

export const FormSubScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();

  const { derpature, arrival } = useSelector((root: RootState) => root.order);

  const handleCreateTicket = () => {
    navigation.navigate("HomePreview");
  };

  const handleOnSearch = (target: "derpature" | "arrival") => {
    navigation.navigate("HomeSearch", { target: target });
  };

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
        <Button title="Buat Tiket" onPress={() => handleCreateTicket()} />
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
