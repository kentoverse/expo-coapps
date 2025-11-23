<<<<<<< HEAD
import { router } from 'expo-router';
import { Text, View } from 'react-native';

// import { useSession } from '../ctx';

export default function LogIn() {
    // const { logIn } = useSession();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text
                onPress={() => {
                    // logIn();
                    // Navigate after signing in. You may want to tweak this to ensure sign-in is
                    // successful before navigating.
                    router.replace('/');
                }}>
                Sign In
            </Text>
        </View>
    );
}
=======
import React from "react";
import { Stack } from 'expo-router';
import { View, Text, StyleSheet } from "react-native";

interface Props {
    title?: string;
}

const Login: React.FC<Props> = ({ title }) => {
    return (
        <Stack>
            <Stack.Screen name="[login]" />
            <Text style={styles.text}>{title}</Text>

        </Stack>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 200,
        color: 'black',
    }
});
>>>>>>> 6d2a1df9b665a2097109aab69a3bc04202d22d72
