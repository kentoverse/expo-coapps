
import { useRef } from 'react';
import { Stack, Slot, router, Link, usePathname } from 'expo-router';
import { Pressable, Text, View, StyleSheet, Button, Platform } from 'react-native';


export default function Index() {
    // const { signOut } = useSession();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text
                onPress={() => {
                    // The `app/(app)/_layout.tsx` will redirect to the sign-in screen.
                    // signOut();
                }}>
                Sign Out
            </Text>
        </View>
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

