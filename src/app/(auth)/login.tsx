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