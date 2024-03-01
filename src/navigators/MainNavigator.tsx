import React from 'react'
import {
    NativeStackScreenProps,
    createNativeStackNavigator
} from "@react-navigation/native-stack";
import { Onboarding1 } from '../screens/Onboarding1';
import { Onboarding2 } from '../screens/Onboarding2';
import { Onboarding3 } from '../screens/Onboarding3';
import { Home } from '../screens/Home';

export type RootStackParamList = {
    Onboarding1: undefined;
    Onboarding2: undefined;
    Onboarding3: undefined;
    Home: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export const MainNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Onboarding1"
        component={Onboarding1}
        options={{
          headerShown: false,
          animation: "fade",
        }}
      />
      <RootStack.Screen
        name="Onboarding2"
        component={Onboarding2}
        options={{
          headerShown: false,
          animation: "fade",
        }}
      />
      <RootStack.Screen
        name="Onboarding3"
        component={Onboarding3}
        options={{
          headerShown: false,
          animation: "fade",
        }}
      />
      <RootStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          animation: "fade",
        }}
      />
    </RootStack.Navigator>
  );
};