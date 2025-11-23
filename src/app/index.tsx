import { useRef } from 'react';
import { Stack, Slot, router, Link, useLocalSearchParams } from 'expo-router';
import { Pressable, Text, View, StyleSheet, Button, Platform } from 'react-native';
import { DotLottie, Mode, type Dotlottie } from '@lottiefiles/dotlottie-react-native';

export default function HomeScreen() {

    const { name } = useLocalSearchParams;

    return (
        <View style={styles.container}>
            <Stack>
                <Stack.Screen />
                <View style={styles.mainButton}>
                    <Text aria-label='mainButton' style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20, }}>
                        <Link href="/login" style={styles.button}>
                            X{name}
                        </Link>
                    </Text>
                </View>

                <Slot />
            </Stack>
        </View >
    );
}

const styles = StyleSheet.create({
    animationContainer: {
        width: 200,
        height: 200,
    },
    container: {
        borderBottomColor: 'pink',
        borderWidth: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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

