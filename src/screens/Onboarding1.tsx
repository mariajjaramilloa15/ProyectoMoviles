import React from "react";
import { Text, StyleSheet, SafeAreaView, View, Image } from "react-native";
import { INTRO_SCREEN_01 } from "../utils/constants";
import PrimaryButton from "../components/PrimaryButton";
import { ScreenIndicators } from "../components/ScreenIndicators";

export const Onboarding1 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.text}>
        <Text style={{fontSize: 20, marginBottom: 0, color: "white"}}>LEGO® Fortnite®</Text>
      </View>
      
      <Image source={require('../assets/images/fortnite.png')} style={styles.image} />
      <View style={styles.text}>
        <Text style={{fontSize: 14, color: "white"}}>{INTRO_SCREEN_01.title}</Text>
        <Text style={{fontSize: 11, color: "#8B8B8B"}}>{INTRO_SCREEN_01.description}</Text>
      </View>
      <ScreenIndicators
          count={3}
          activeIndex={0}
        />
      <View style={styles.buttonContainer}>
        <PrimaryButton
          label="Next"
          onPress={() => navigation.navigate("Onboarding2")}
          style={styles.nextButton}
        />
        
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: '#121212',
    justifyContent: "center",
    alignItems: "center",
  },
  textSlide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  nextButton: {
    flex: 1,
    marginHorizontal: 5,
  },
  text: {
    height: 130,
    width: 180,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  image: {
    width: 130,
    height: 130,
    alignItems: "center",
    marginTop: 0,
    marginBottom: 0,
  },
});