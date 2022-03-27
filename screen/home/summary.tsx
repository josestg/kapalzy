import {
  CommonActions,
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { getShipByID } from "../../api/ticket.api";
import { Ship } from "../../model";
import { RootState } from "../../redux";
import { addOrder } from "../../redux/reducers/ticket";
import { HomeStackParamList } from "../../router";
import {
  Button,
  Icon,
  InputOptions,
  TextInput,
  TicketCard,
  Modal,
} from "../../shared";
import { OptionItem } from "../../shared/input-option";

export function SummarySubScreen() {
  const [gender, setGender] = useState<OptionItem>({
    value: "male",
    label: "Male",
  });
  const [modalVisible, setModalVisible] = useState(false);

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();
  const [ship, setShip] = useState<Ship | undefined>(undefined);

  const { params } = useRoute<RouteProp<HomeStackParamList, "HomePreview">>();
  const { derpature, arrival, serviceClass } = useSelector(
    (root: RootState) => root.order
  );

  useEffect(() => {
    getShipByID(params.ticket.shipId).then(setShip);
  }, [params]);

  if (derpature === undefined || arrival === undefined || ship === undefined) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  const genders = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  const onSubmit = () => {
    setModalVisible(true);
    dispatch(addOrder(params.ticket));
  };

  const onClose = () => {
    setModalVisible(false);
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: "Home" }],
      })
    );
  };

  const onPrev = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background} />
      <ScrollView
        style={{
          flex: 1,
          paddingTop: StatusBar.currentHeight,
        }}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={styles.box}>
          <Modal visible={modalVisible} onClose={onClose} />
          <Text style={styles.hero}>Kapalzy</Text>
          <Text style={styles.strong}>Informasi Pemesanan</Text>
          <TicketCard
            ticket={params.ticket}
            derpature={derpature}
            arrival={arrival}
            ship={ship}
          />
          <Text style={styles.strong}>Data Pemesan</Text>
          <TextInput
            label="Nama Lengkap"
            placeholder="Nama anda..."
            onChangeText={setName}
            value={name}
            iconFactory={(focused) => <Icon name={"user"} focused={focused} />}
          />
          <InputOptions
            label="Jenis Kelamin"
            iconFactory={(focused) => <Icon name={"sex"} focused={focused} />}
            selected={gender}
            onSelect={(selected) => setGender(selected)}
            options={genders}
          />
          <TextInput
            label="Umur"
            placeholder="Umur anda..."
            mode="decimal-pad"
            onChangeText={(text) => setAge(Number(text))}
            iconFactory={(focused) => <Icon name={"date"} focused={focused} />}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Button title={"Kembali"} onPress={onPrev} />
            <Button title={"Submit"} onPress={onSubmit} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  background: {
    display: "flex",
    flex: 1,
    backgroundColor: "#1A202C",
    width: "100%",
    position: "absolute",
    top: 0,
    right: 0,
    height: "50%",
    borderBottomEndRadius: 60,
    borderBottomLeftRadius: 60,
  },

  hero: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 18,
    textAlign: "center",
  },

  strong: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },

  box: {
    marginVertical: 32,
    width: 320,
    display: "flex",
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 16,
    shadowColor: "#1A202C",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 2,
  },
});
