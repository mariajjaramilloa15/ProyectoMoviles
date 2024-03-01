import React from "react";
import { Text, StyleSheet, SafeAreaView, View, Image } from "react-native";
import { RootStackScreenProps } from "../navigators/MainNavigator";
import { INTRO_SCREEN_03 } from "../utils/constants";
import { ScreenIndicators } from "../components/ScreenIndicators";
import PrimaryButton  from "../components/PrimaryButton";

export const Onboarding3 = ({
  navigation,
}: RootStackScreenProps<"Onboarding3">) => {
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
      <ScreenIndicators count={3} activeIndex={2} />
      <PrimaryButton
        label="Next"
        style={{
          marginTop: 40,
          paddingHorizontal: 32,
          height: 52,
          borderRadius: 100,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => navigation.replace("Home")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: "center",
    justifyContent: "center",
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