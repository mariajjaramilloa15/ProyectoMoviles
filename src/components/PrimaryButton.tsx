import {
  StyleSheet,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import React from "react";

export default function PrimaryButton({
  onPress,
  label,
}: {
  onPress?: () => void;
  label: string;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}) {
  return (
    <TouchableOpacity
      style={styles.primaryButton}
      onPress={onPress}
    >
      <Text style={styles.primaryButtonText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  primaryButton:{
    paddingHorizontal: 32,
    height: 46,
    width: 120,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#0074E4',
    marginTop: 15,
    marginLeft: 10,
  },
  primaryButtonText:{
    fontSize: 20,
    fontWeight: "600",
    color: "white",
  },
});