import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { HomeStackParamList } from "../../router";
import { Button } from "../../shared";

export const FormSubScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();

  const handleCreateTicket = () => {
    navigation.navigate("HomePreview");
  };

  return (
    <View style={styles.container}>
      <Text>Form SubScreen</Text>
      <Button title="Buat Tiket" onPress={() => handleCreateTicket()} />
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
});
