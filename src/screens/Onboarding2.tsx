import React from "react";
import { Text, StyleSheet, SafeAreaView, View, Image } from "react-native";
import { RootStackScreenProps } from "../navigators/MainNavigator";
import { INTRO_SCREEN_02 } from "../utils/constants";
import { ScreenIndicators } from "../components/ScreenIndicators";
import PrimaryButton  from "../components/PrimaryButton";

export const Onboarding2 = ({
  navigation,
}: RootStackScreenProps<"Onboarding2">) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.text}>
        <Text style={{fontSize: 20, marginBottom: 0, color: "white"}}>Prince of Persia: The Lost Crown</Text>
      </View>
        <Image source={require('../assets/images/PrinceOfPersia.png')} style={styles.image} />
      <View style={styles.text}>
        <Text style={{fontSize: 14, color: "white"}}>{INTRO_SCREEN_02.title}</Text>
        <Text style={{fontSize: 11, color: "#8B8B8B"}}>{INTRO_SCREEN_02.description}</Text>
      </View>
      <ScreenIndicators count={3} activeIndex={1} />
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
        onPress={() => navigation.replace("Onboarding3")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: "center",
    alignItems: "center",
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
})