import { View, Text, Pressable } from 'react-native';
import { router } from 'expo-router';

export default function IndexPage() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>My Home Page</Text>
      <Pressable onPress={() => router.push('/modal')}>
        <Text>Go to Modal</Text>
      </Pressable>
    </View>
  );
}