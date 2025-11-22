import { Stack } from 'expo-router';

export const unstable_settings = {
    anchor: 'profile',
};

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name="[productId]" options={{ headerShown: false }} />
            <Stack.Screen
                name="modal"
                options={{
                    presentation: 'transparentModal',
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