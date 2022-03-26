import { useState } from "react";
import {
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  Text,
  TextInput as RNTextInput,
  View,
  ViewStyle,
} from "react-native";

interface TextInputPops {
  label: string;
  iconFactory: (focussed: boolean) => React.ReactElement | null;

  placeholder?: string;
  mode?: KeyboardTypeOptions;
  style?: StyleProp<ViewStyle>;
  onChangeText?: (text: string) => void;
  value?: string;
}

export const TextInput: React.FC<TextInputPops> = ({
  label,
  iconFactory,
  placeholder,
  style,
  mode,
  onChangeText,
  value,
}) => {
  const [foucesed, setFocused] = useState(false);

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
        {iconFactory(foucesed)}
        <RNTextInput
          editable
          keyboardType={mode}
          style={styles.editor}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChangeText={onChangeText}
          value={value}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginBottom: 12,
  },
  editor: {
    flex: 1,
    marginLeft: 8,
  },
  input: {
    display: "flex",
    flexDirection: "row",
    padding: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    width: "100%",
    borderRadius: 8,
    shadowColor: "#333",
    alignItems: "center",
  },
  label: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 4,
  },
});
