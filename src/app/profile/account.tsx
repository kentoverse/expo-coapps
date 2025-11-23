
import { useRef } from 'react';
import { Text, View, Button, StyleSheet, Pressable, Platform } from "react-native";
import { Stack, Slot, router, Link, useLocalSearchParams } from 'expo-router';
import { DotLottie, Mode, type Dotlottie } from '@lottiefiles/dotlottie-react-native';
import { StatusBar } from 'expo-status-bar';


export default function Account() {
    const { name } = useLocalSearchParams();
    const ref = useRef<Dotlottie>(null);
    const isPresented = router.canGoBack();

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 200 }}>Account | {name}</Text>

            <Pressable onPress={() => router.push('./login/profile')} style={styles.button}>
                <Text style={styles.buttonText}>Profile</Text>
            </Pressable>
            <Text aria-label='mainButton' style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20, }}>
                <Link href="/profile" style={styles.button}>
                    Profile
                </Link>
            </Text>
        </View>
    )
}



const styles = StyleSheet.create({
    animationContainer: {
        width: 200,
        height: 200,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainButton: {
        paddingTop: 20,
        fontSize: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 16,
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
    box: {
        width: 200,
        height: 200,
        marginVertical: 20,
    },
});


