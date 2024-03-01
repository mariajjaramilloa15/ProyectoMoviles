import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";

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
    <TouchableOpacity style={styles.primaryButton} onPress={onPress}>
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
    width: 274,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#0074E4',
  },
  primaryButtonText:{
    fontSize: 20,
    fontWeight: "600",
    color: "white",
  },
});