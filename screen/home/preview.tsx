import { StyleSheet, Text, View } from "react-native";

export const PreviewubScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Preview SubScreen</Text>
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
