import React from "react";
import { Alert, Modal as RNModal, StyleSheet, Text, View } from "react-native";
import { Button } from "./button";

interface Props {
  visible: boolean;
  onClose: () => void;
}

export const Modal: React.FC<Props> = ({ visible, onClose }) => {
  return (
    <View style={styles.centeredView}>
      <RNModal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          onClose();
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              <Text style={styles.textStyle}>Pembayaran</Text>
              <View>
                <Text style={styles.modalText}>Transfer ke nomor rekening</Text>
                <Text style={styles.modalText}>0813xxx</Text>
                <Text style={styles.modalText}>BANK BCA</Text>
              </View>
            </View>

            <Button title={"Selesai"} onPress={onClose} />
          </View>
        </View>
      </RNModal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: "60%",
    padding: 16,
    backgroundColor: "#E2E8F0",
    borderRadius: 20,

    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },

  textStyle: {
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
    fontSize: 24,
    marginBottom: 12,
  },
  modalText: {
    textTransform: "uppercase",
    fontSize: 13,
    textAlign: "center",
  },
});
