import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

export type OptionItem = { value: string; label: string };

interface InputOptionsProps {
  label: string;
  iconFactory: (focussed: boolean) => React.ReactElement | null;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  options?: OptionItem[];
  focused?: boolean;
  onSelect?: (item: OptionItem) => void;
  selected?: OptionItem;
}

export const InputOptions: React.FC<InputOptionsProps> = (props) => {
  const { label, iconFactory, style, options, selected, onSelect } = props;
  const [foucesed, setFocused] = useState(false);

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputBox}>
        {iconFactory(foucesed)}
        <View style={{ flex: 1, paddingVertical: 21 }}>
          <Picker
            style={{ flex: 1 }}
            selectedValue={selected}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onValueChange={onSelect}
          >
            {options?.map((opt) => (
              <Picker.Item
                key={opt.value}
                label={opt.label}
                value={opt.value}
              />
            ))}
          </Picker>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginBottom: 12,
  },
  inputBox: {
    maxHeight: 48,
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ddd",
    width: "100%",
    borderRadius: 8,
    shadowColor: "#333",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  label: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 4,
  },
});
