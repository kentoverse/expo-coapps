import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      {/* Main screen */}
      <Stack.Screen name="index" options={{ title: 'Home' }} />

      {/* Modal screen */}
      <Stack.Screen 
        name="modal" 
        options={{ presentation: 'modal', title: 'My Modal' }} 
      />
    </Stack>
  );
}