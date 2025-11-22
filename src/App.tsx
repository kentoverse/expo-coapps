import { Slot } from "expo-router";
import React from "react";
import { PaperProvider, MD3LightTheme, configureFonts } from "react-native-paper";
import * as SplashScreen from 'expo-splash-screen';

const fontConfig = {
  bodyLarge: { fontSize: 20, lineHeight: 22, letterSpacing: 0.5 },
};

const theme = {
  ...MD3LightTheme,
  fonts: configureFonts({ config: fontConfig }),
};

// Set the animation options. This is optional.
SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});


export default function App() {
  return (

      <PaperProvider theme={theme}>

        <Slot /> 
      </PaperProvider>
  );
}