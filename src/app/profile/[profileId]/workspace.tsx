
import { useRef } from 'react';
import { Text, View, Button, StyleSheet, Pressable } from "react-native";
import { Stack, Slot, router, Link, useLocalSearchParams } from 'expo-router';
import { DotLottie, Mode, type Dotlottie } from '@lottiefiles/dotlottie-react-native';


export default function Workspace() {

    const ref = useRef<Dotlottie>(null);
    const { name } = useLocalSearchParams;


    return <Text style={{fontSize: 300}}>
        Workspace | { name }
    </Text>;
}
