import React from 'react';
import { router, Link, Stack } from 'expo-router';
import { Pressable, Text, View, StyleSheet, Button } from 'react-native';


export default function HomeScreen() {
    return (
        <Stack style={styles.container}>
{/* block identifier */}
            <View style={{ borderColor: 'pink', borderWidth:5, backgroundColor:}}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20, }}>
                    Home screen
                </Text>
                <View style={styles.mainButton}>
                    <Text aria-label='mainButton' style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20, }}>
                        Home screen
                    </Text>
                    <Stack.Screen name="[login]" />
                </View>



                <View>
                    <Pressable onPress={() => router.push('/login')} style={styles.button}>
                        <Text style={styles.buttonText}>Profile</Text>
                    </Pressable>
                </View>
            </View>
            {/* block identifier */}
        </Stack>
    );
}

const styles = StyleSheet.create({
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
});