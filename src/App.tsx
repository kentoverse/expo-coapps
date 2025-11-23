<<<<<<< HEAD
// import { Slot } from "expo-router";
// import { PaperProvider, MD3LightTheme, configureFonts } from "react-native-paper";
// import { TodoProvider } from "@/components/TodoContext";
// import { StyleSheet, View } from 'react-native';
// import { DotLottie, Mode, type Dotlottie } from '@lottiefiles/dotlottie-react-native';
// import { useRef } from 'react';
=======
import { Slot } from "expo-router";
import React from "react";
import { PaperProvider, MD3LightTheme, configureFonts } from "react-native-paper";
import * as SplashScreen from 'expo-splash-screen';
>>>>>>> 6d2a1df9b665a2097109aab69a3bc04202d22d72


// const fontConfig = {
//     bodyLarge: { fontSize: 20, lineHeight: 22, letterSpacing: 0.5 },
// };

<<<<<<< HEAD
// const theme = {
//     ...MD3LightTheme,
//     fonts: configureFonts({ config: fontConfig }),
// };


// export default function Root() {
//     const ref = useRef<Dotlottie>(null);

//     return (
//         <TodoProvider>
//             <PaperProvider theme={theme}>
//                 {/* Splash screen wraps Router layout */}
//                 <View style={styles.container}>
//                     <DotLottie
//                         style={styles.animationContainer}
//                         source={{
//                             uri: 'https://lottie.host/294b684d-d6b4-4116-ab35-85ef566d4379/VkGHcqcMUI.lottie',
//                         }}
//                         autoPlay={true}
//                         loop
//                     />
//                 </View>
//                 <Button title="Play" onPress={() => ref.current?.play()} />
//                 <Button title="Pause" onPress={() => ref.current?.pause()} />
//                 <Button title="Stop" onPress={() => ref.current?.stop()} />
//                 <Button title="Loop" onPress={() => ref.current?.setLoop(true)} />
//                 <Button title="Speed" onPress={() => ref.current?.setSpeed(1)} />
//                 <Button
//                     title="FORWARD"
//                     onPress={() => ref.current?.setPlayMode(Mode.FORWARD)}
//                 />
//                 <Button
//                     title="REVERSE"
//                     onPress={() => ref.current?.setPlayMode(Mode.REVERSE)}
//                 />


//                 <Slot />
//             </PaperProvider>
//         </TodoProvider>
//     );
// }


// const styles = StyleSheet.create({
//     animationContainer: {
//         width: 200,
//         height: 200,
//     },
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });
=======
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
>>>>>>> 6d2a1df9b665a2097109aab69a3bc04202d22d72
