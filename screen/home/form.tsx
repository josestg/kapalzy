import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { HomeStackParamList } from "../../router";
import { Button, Icon, TextInput } from "../../shared";

export const FormSubScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();

  const handleCreateTicket = () => {
    navigation.navigate("HomePreview");
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          label="Asal"
          iconFactory={(focused) => <Icon focused={focused} name="ship" />}
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
