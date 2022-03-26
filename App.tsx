import { StyleSheet } from "react-native";
import { Provider as ReduxProvider } from "react-redux";
import reduxStore from "./redux";
import { HomeScreen } from "./screen/home";

export default function App() {
  return (
    <ReduxProvider store={reduxStore}>
      <HomeScreen />
    </ReduxProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
