import React, { useState } from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

interface InputDateProps {
  label: string;
  iconFactory: (focussed: boolean) => React.ReactElement | null;
  style?: StyleProp<ViewStyle>;
  focused?: boolean;
  onChange?: (updates: Date) => void;
  value?: string;
  mode: "date" | "time";
  placeholder?: string;
}

export const InputDate: React.FC<InputDateProps> = ({
  label,
  iconFactory,
  style,
  value,
  onChange,
  mode,
  placeholder,
}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [foucesed, setFocused] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (d: Date) => {
    if (onChange !== undefined) {
      onChange(d);
    }

    hideDatePicker();
  };

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <Pressable onPress={showDatePicker}>
        <View style={styles.input}>
          {iconFactory(foucesed)}

          <Text style={[styles.editor, styles.placeholder]}>
            {value || placeholder}
          </Text>
        </View>
      </Pressable>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={mode}
        onConfirm={(date) => handleConfirm(date)}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginBottom: 12,
  },
  editor: {
    paddingVertical: 8,
    paddingLeft: 8,
  },
  input: {
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ddd",
    width: "100%",
    paddingHorizontal: 4,
    borderRadius: 8,
    shadowColor: "#333",
    alignItems: "center",
  },
  label: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 4,
  },
  placeholder: {
    color: "#333",
  },
});
