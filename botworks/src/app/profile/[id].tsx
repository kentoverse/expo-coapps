import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";



export default function UserId() {
    const { name } = useLocalSearchParams();
    return <Text style={{fontSize: 200}}>User | {name}</Text>;
}
