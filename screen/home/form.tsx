import { StyleSheet, Text, View } from "react-native";

export const FormSubScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Form SubScreen</Text>
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
