import { useRef } from 'react';
import { Stack, router, Link } from 'expo-router';
import { Pressable, Text, View, StyleSheet, Button, Platform } from 'react-native';
import { DotLottie, Mode, type Dotlottie } from '@lottiefiles/dotlottie-react-native';

export default function HomeScreen() {
    const ref = useRef<Dotlottie>(null);

    return (
        <View style={styles.container}>
            <Stack.Screen />
            <View style={styles.mainButton}>
                <Text aria-label='mainButton' style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20, }}>
                    <Link href="/modal" style={styles.button}>
                        Modal
                    </Link>
                </Text>
            </View>

            <Stack>
                <Stack>


                    <Stack.Screen name="control" />
                    <Stack>
                        <View style={styles.title}>
                            <Button
                                title="FORWARD"
                                onPress={() => ref.current?.setPlayMode(Mode.FORWARD)} />
                        </View>

                        <View style={styles.title}>
                            <Button
                                title="REVERSE"
                                onPress={() => ref.current?.setPlayMode(Mode.REVERSE)}
                            />

                        </View>



                        <View>
                            <Pressable onPress={() => router.push('/login')} style={styles.button}>
                                <Text style={styles.buttonText}>Profile</Text>
                            </Pressable>
                        </View>
                    </Stack>
                </Stack>
                <View style={styles.mainButton}>
                    <Text aria-label='mainButton' style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20, }}>
                        <Link href="/profile" style={styles.button}>
                            Profile
                        </Link>
                    </Text>
                </View>

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

