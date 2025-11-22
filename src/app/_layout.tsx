import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';



export const unstable_settings = {
    anchor: 'index',
};

export default function RoootLayout() {

    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/Verdana.ttf'),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hide();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <Stack>
            <Stack.Screen name="index" />
            <Stack.Screen
                name="modal"
                options={{
                    presentation: 'modal', // Enables modal behavior
                    sheetAllowedDetents: [0.5, 1], // Array of snap positions for screens that have a width less than 768px.
                }}
            />
        </Stack>
    );
}