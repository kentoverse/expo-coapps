
import { useRef } from 'react';
import { Stack, Slot, router, Link, usePathname } from 'expo-router';
import { Pressable, StatusBar, View, StyleSheet, Text, Platform } from 'react-native';
import { DotLottie, Mode, type Dotlottie } from '@lottiefiles/dotlottie-react-native';



export default function WorksoaceScreen() {
    const isPresented = router.canGoBack();

    return (
        <Stack>
            <Stack.Screen name="interactive" />
            <View >
                <Text style={styles.button}>
                    Interactive Screen
                </Text>
            </View>
            <View >


                {isPresented && <Link href="./">Dismiss modal</Link>}
                <StatusBar backgroundColor={Platform.OS === 'ios' ? 'light' : 'auto'} />


            </View >
        </Stack>


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

