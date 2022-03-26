import { StyleSheet, Text, View } from "react-native";

export const OthersScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Others Screen</Text>
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
