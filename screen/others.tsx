import { StyleSheet, Text, View } from "react-native";
import { Icon } from "../shared";

export const OthersScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <View style={styles.box}>
          <Icon focused name="search" size={80} />
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Cek Pesanan</Text>
        </View>

        <View style={styles.box}>
          <Icon focused name="user" size={80} />
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Detail Profile
          </Text>
        </View>
      </View>
      <View style={styles.group}>
        <View style={styles.box}>
          <Icon focused name="phone" size={80} />
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Hubungi Kami</Text>
        </View>

        <View style={styles.box}>
          <Icon focused name="cart" size={80} />
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Riwayat Pesanan
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  group: {
    display: "flex",
    flexDirection: "row",
    padding: 16,
  },

  box: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    margin: 8,
    borderRadius: 8,
    padding: 16,
  },
});
