import { router } from 'expo-router';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';

// Safe localStorage reading
function getStoredItem<T>(key: string, defaultValue: T): T {
    try {
        if (typeof localStorage === 'undefined') return defaultValue;
        const raw = localStorage.getItem(key);
        if (!raw) return defaultValue;
        return JSON.parse(raw) as T;
    } catch {
        return defaultValue;
    }
}

export default function IndexPage() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const storedTheme = getStoredItem('theme', 'light');
        setTheme(storedTheme);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>
            <Text>Current theme: {theme}</Text>
            {/* <Pressable onPress={() => router.push('/modal')} style={styles.button}>
                <Text style={styles.buttonText}>Open Modal</Text>
            </Pressable> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 16,
        borderRadius: 8,
        marginTop: 16,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
});