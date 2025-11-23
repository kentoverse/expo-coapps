import { Stack, Slot } from 'expo-router';

export const unstable_settings = {
    anchor: 'index',
};

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name="[productId]" options={{ headerShown: false }} />
            <Slot />
            <Stack.Screen
                name="profile"
                options={{
                    presentation: 'modal',
                    webModalStyle: {
                        width: '95vw',
                        height: '95vh',
                        border: 'none',
                    },
                    sheetAllowedDetents: 'fitToContents',
                    sheetCornerRadius: 32,

                }} />



        </Stack>
    );
}