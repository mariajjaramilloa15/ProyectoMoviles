import React from "react";
import { Text, StyleSheet, SafeAreaView, View, Image } from "react-native";
import { INTRO_SCREEN_01, INTRO_SCREEN_03 } from "../utils/constants";
import PrimaryButton from "../components/PrimaryButton";
import { ScreenIndicators } from "../components/ScreenIndicators";

export const Onboarding3 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.text}>
        <Text style={{fontSize: 20, marginBottom: 0, color: "white"}}>Dying Light 2</Text>
      </View>
        <Image source={require('../assets/images/DyingLight2.png')} style={styles.image} />
      <View style={styles.text}>
        <Text style={{fontSize: 14, color: "white"}}>{INTRO_SCREEN_03.title}</Text>
        <Text style={{fontSize: 11, color: "#8B8B8B"}}>{INTRO_SCREEN_03.description}</Text>
      </View>
      <ScreenIndicators
          count={3}
          activeIndex={2}
        />
      <View style={styles.buttonContainer}>
      <PrimaryButton
          label="Back"
          onPress={() => navigation.navigate("Onboarding2")}
          style={styles.nextButton}
        />
        <PrimaryButton
          label="Next"
          onPress={() => navigation.navigate("TabNavigator")}
          style={styles.nextButton}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    borderRadius: 10,
    marginBottom: 0,
    marginTop: 0,
  },
  image: {
    width: 130,
    height: 130,
    alignItems: "center",
    marginTop: 0,
    marginBottom: 0,
  },
});