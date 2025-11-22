import { useGlobalSearchParams } from "expo-router";
import { Text, StyleSheet } from "react-native";


export default function Header() {
    const { name } = useGlobalSearchParams();
    return <Text style={styles.text}>This is {name}</Text>;
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 200,
        color: 'black',
    }
});