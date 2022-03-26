import { StyleSheet, Text, View } from "react-native";

export const SummarySubScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Summary SubScreen</Text>
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
