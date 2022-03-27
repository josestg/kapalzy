import {
  Fontisto,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import React from "react";

const ICON = {
  ship: "ship",
  service: "seat-passenger",
  date: "calendar",
  time: "clock",
  destination: "arrow-right",
  user: "user",
  sex: "intersex",
  ticket: "ticket-confirmation",
  search: "book-search",
  phone: "phone",
  cart: "cart",
};

type IconType = keyof typeof ICON;

interface IconProps {
  name: IconType;
  focused: boolean;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, focused, size }) => {
  const color = focused ? "#63B3ED" : "black";
  const iconSize = size || 24;

  switch (name) {
    case "ship":
    case "destination":
    case "sex":
      return (
        <Fontisto name={ICON[name] as any} size={iconSize} color={color} />
      );
    case "service":
    case "cart":
    case "date":
    case "destination":
    case "ticket":
    case "search":
    case "phone":
      return (
        <MaterialCommunityIcons
          name={ICON[name] as any}
          size={iconSize}
          color={color}
        />
      );
    case "user":
      return (
        <FontAwesome name={ICON[name] as any} size={iconSize} color={color} />
      );
    default:
      throw new Error("unkown name");
  }
};
