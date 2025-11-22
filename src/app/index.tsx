import React from 'react';
import { router, Link } from 'expo-router';
import { Pressable, Text, View, StyleSheet, Button } from 'react-native';


export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text>Home screen</Text>
            <Link href="/modal" style={styles.link}>
                Open modal
            </Link>
            <View>
                <Pressable onPress={() => router.push('/modal')} style={styles.button}>
                    <Text style={styles.buttonText}>Open Modal</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    link: {
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