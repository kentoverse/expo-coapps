import { View, Text, Pressable } from 'react-native';
import { router } from 'expo-router';

export default function ModalPage() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
            <Text>This is a modal!</Text>
            <Pressable
                onPress={() => router.back()}
                style={{ marginTop: 20, padding: 10, backgroundColor: '#FF3B30', borderRadius: 5 }}
            >
                <Text style={{ color: 'white' }}>Close Modal</Text>
            </Pressable>
        </View>
    );
}