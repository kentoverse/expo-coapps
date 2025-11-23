import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";



export default function Modal() {
    const { name } = useLocalSearchParams();
    return <Text style={{fontSize: 200}}>Modal</Text>;
}
