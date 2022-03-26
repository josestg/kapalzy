import { StyleSheet, Text, View } from "react-native";

export const CancellationScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Cancellation Screen</Text>
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
