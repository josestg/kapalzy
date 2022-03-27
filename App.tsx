import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as ReduxProvider } from "react-redux";
import { getIconName } from "./helper/icons";
import { ScreenNameKeys } from "./model";
import reduxStore from "./redux";
import { RootTabParamList } from "./router";
import { CancellationScreen } from "./screen/cancellation";
import { HomeScreen } from "./screen/home";
import { OrderScreen } from "./screen/orders";
import { OthersScreen } from "./screen/others";

const Tab = createBottomTabNavigator<RootTabParamList>();

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
          <Tab.Screen name={"Home"} component={HomeScreen} />
          <Tab.Screen name={"Orders"} component={OrderScreen} />
          <Tab.Screen name={"Cancellations"} component={CancellationScreen} />
          <Tab.Screen name={"Others"} component={OthersScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}
