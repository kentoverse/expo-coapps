import { Link, router } from 'expo-router';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';



export default function Modal() {
    const isPresented = router.canGoBack();

    return (
        <View style={styles.container}>
            <Text>Modal screen</Text>
            {isPresented && <Link href="../">Dismiss modal</Link>}

            <View>
                <Text>Status</Text>
                <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});


const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});