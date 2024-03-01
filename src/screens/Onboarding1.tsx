import React from "react";
import { Text, StyleSheet, SafeAreaView, View, Image } from "react-native";
import { RootStackScreenProps } from "../navigators/MainNavigator";
import { INTRO_SCREEN_01 } from "../utils/constants";
import { ScreenIndicators } from "../components/ScreenIndicators";
import PrimaryButton  from "../components/PrimaryButton";

export const Onboarding1 = ({
  navigation,
}: RootStackScreenProps<"Onboarding1">) => {
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
      <ScreenIndicators count={3} activeIndex={0} />
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
        onPress={() => navigation.replace("Onboarding2")}
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
  },
  image: {
    width: 130,
    height: 130,
    alignItems: "center",
    marginTop: 0,
    marginBottom: 0,
  },
});