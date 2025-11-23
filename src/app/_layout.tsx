
import { useEffect } from 'react';
import { RootStackParamList } from '../services/navigation';
import { Slot, Stack, router } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
<<<<<<< HEAD
import { Text } from 'react-native';

=======
import { useEffect } from 'react';
import { TodoProvider } from "../components/TodoContext";
>>>>>>> 6d2a1df9b665a2097109aab69a3bc04202d22d72

// import { SessionProvider } from '../ctx';


export const unstable_settings = {
    anchor: 'index',
};

interface Props {
    children: React.ReactNode | any;
}


export default function RootLayout() {

    // useEffect(() => {

    //     router.push('./home');
    //     if (true) {
    //         SplashScreen.hide();
    //         return null
    //     }
    //     if (true) {
    //         return <Text>Loading...</Text>;
    //     }
    // }, []);



    const [loaded] = useFonts({
        Verdana: require('../assets/fonts/Verdana.ttf'),
    });




    return (
<<<<<<< HEAD
            <Stack>
                <Stack.Screen
                    name="home"
=======
        <TodoProvider>
            <Stack>
                <Stack.Screen name="index" />
                <Stack.Screen
                    name="modal"
>>>>>>> 6d2a1df9b665a2097109aab69a3bc04202d22d72
                    options={{
                        presentation: 'modal', // Enables modal behavior
                        sheetAllowedDetents: [0.5, 1], // Array of snap positions for screens that have a width less than 768px.
                    }}
                />
<<<<<<< HEAD
                <Slot />

            </Stack>
=======
            </Stack>
        </TodoProvider>
>>>>>>> 6d2a1df9b665a2097109aab69a3bc04202d22d72
    );
}