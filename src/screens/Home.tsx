import React, { useCallback, useRef, useState } from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  View,
  Alert
} from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export const Home = () => {
  const sheetRef = useRef<BottomSheet>(null);
  const [isOpen, setIsOpen] = useState(true);
  const snapPoints = ["45%"];

  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
    setIsOpen(true);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <GestureHandlerRootView
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Image
          source={require("../assets/images/epicgames.png")}
          style={styles.image}
        />
        <Text style={{ fontSize: 20, marginTop: 10, color: "white" }}>
          Bienvenido a Epic Games
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSnapPress(0)}
        >
          <Text style={{ color: "#0080FB", fontSize: 16, fontWeight: "600" }}>
            Ofertas
          </Text>
        </TouchableOpacity>
        <BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          onClose={() => setIsOpen(false)}
        >
          <BottomSheetView>
            <Text style={styles.title}>Ofertas Imperdibles🔥</Text>
            <Image style={styles.image} source={require("../assets/images/fortnite.png")} />
            <View style={styles.container}>  
              <View style={{ marginLeft: 90, marginBottom:20 }}>
                <Text style={[styles.text, {color: 'black'}]}>Fortnite®</Text>
              </View>

              <View style={{ marginLeft: 90, marginBottom:20 }}>
                <Text style={[styles.text, {color: 'grey'}]}>¡Súbete al escenario con una banda de amigos o en solitario!</Text>
              </View>
              <Text style={[styles.text, {color: 'gray', marginLeft: 90, marginVertical: 5, marginTop: 50}]}>$50 USD<Text style={[styles.text]}></Text></Text> 
              <View style={styles.confirmButtonContainer}>
                <TouchableOpacity onPress={() => Alert.alert('Proximamente más información')}>
                  <View style={styles.confirmButton}><Text style={styles.confirmButtonText}>🔍</Text></View>
                </TouchableOpacity>
              </View>
            </View>
          </BottomSheetView>
        </BottomSheet>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    height: 130,
    width: 180,
    alignItems: "flex-start",
    justifyContent: "center",
    fontSize: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginLeft: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#f4f4f4",
    width: 80,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 30,
    letterSpacing: .5,
    color: "#000",
    marginLeft: 30,
    marginTop:20,
  },
  confirmButtonContainer: {
    position: "absolute",
    bottom: -100, // Mover el botón hacia abajo
    left: "50%",
    transform: [{ translateX: -25 }], // Mitad del ancho del botón
  },
  
  confirmButton: {
    backgroundColor: "#0080FB",
    height: 50,
    width: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  confirmButtonText: {
    color: "#fff",
    fontSize: 20,
  },
}); 