import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as ReduxProvider } from "react-redux";
import { getIconName } from "./helper/icons";
import { ScreenNameKeys, ScreenNames } from "./model";
import reduxStore from "./redux";
import { HomeScreen } from "./screen/home";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ReduxProvider store={reduxStore}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              const screenName = route.name as ScreenNameKeys;
              const iconName = getIconName(screenName, focused);
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name={ScreenNames["Home"]} component={HomeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}
