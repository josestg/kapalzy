import { StyleSheet, Text, View } from "react-native";

export const OrderScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Order Screen</Text>
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
