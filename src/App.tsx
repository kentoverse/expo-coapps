import { Slot } from "expo-router";
import React from "react";
import { PaperProvider, MD3LightTheme, configureFonts } from "react-native-paper";
import { TodoProvider } from "@/components/TodoContext";
import SplashScreen from "@/components/splashScreent";

const fontConfig = {
  bodyLarge: { fontSize: 20, lineHeight: 22, letterSpacing: 0.5 },
};

const theme = {
  ...MD3LightTheme,
  fonts: configureFonts({ config: fontConfig }),
};

export default function Root() {
  return (
    <TodoProvider>
      <PaperProvider theme={theme}>
        {/* Splash screen wraps Router layout */}
        <SplashScreen nextScreen="/" duration={3500} />
        <Slot /> 
      </PaperProvider>
    </TodoProvider>
  );
}