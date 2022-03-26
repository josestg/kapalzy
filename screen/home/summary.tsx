import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { HomeStackParamList } from "../../router";
import { Button } from "../../shared";

export const SummarySubScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();

  const handleOnPrev = () => {
    navigation.goBack();
  };

  const handleOnSubmit = () => {};

  return (
    <View style={styles.container}>
      <Text>Summary SubScreen</Text>
      <Button title="Kembali" onPress={() => handleOnPrev()} />
      <Button title="Submit" onPress={() => handleOnSubmit()} />
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
