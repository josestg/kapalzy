import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { HomeStackParamList } from "../../router";
import { Button } from "../../shared";

export const PreviewubScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();

  const handleOnPrev = () => {
    navigation.goBack();
  };

  const handleOnNext = () => {
    navigation.navigate("HomeSummary");
  };

  return (
    <View style={styles.container}>
      <Text>Preview SubScreen</Text>
      <Button title="Kembali" onPress={() => handleOnPrev()} />
      <Button title="Lanjutkan" onPress={() => handleOnNext()} />
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
