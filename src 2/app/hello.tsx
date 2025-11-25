import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";



export default function Hello() {
    const { name } = useLocalSearchParams();
    return <Text>This is {name}</Text>;
}