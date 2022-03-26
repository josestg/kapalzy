import { ScreenNameKeys } from "../model";

export function getIconName(screenName: ScreenNameKeys, focused: boolean) {
  switch (screenName) {
    case "Home":
      return focused ? "home" : "home-outline";
    case "Orders":
      return focused ? "cart" : "cart-outline";
    case "Cancellations":
      return focused ? "time" : "time-outline";
    default:
      return focused ? "menu" : "menu-outline";
  }
}
