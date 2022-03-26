import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as ReduxProvider } from "react-redux";
import { getIconName } from "./helper/icons";
import { ScreenNameKeys, ScreenNames } from "./model";
import reduxStore from "./redux";
import { CancellationScreen } from "./screen/cancellation";
import { HomeScreen } from "./screen/home";
import { OrderScreen } from "./screen/orders";
import { OthersScreen } from "./screen/others";

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
          <Tab.Screen name={ScreenNames["Orders"]} component={OrderScreen} />
          <Tab.Screen
            name={ScreenNames["Cancellations"]}
            component={CancellationScreen}
          />
          <Tab.Screen name={ScreenNames["Others"]} component={OthersScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}
