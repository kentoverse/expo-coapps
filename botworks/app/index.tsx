// app/index.tsx
import { Pressable, Text, View, StyleSheet, Platform } from 'react-native';
import { router } from 'expo-router';

export default function HomePage() {
  const handlePress = () => {
    // On web, wrap in setTimeout to avoid touch conflicts
    if (Platform.OS === 'web') {
      setTimeout(() => router.push('/modal'), 0);
    } else {
      router.push('/modal');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Pressable onPress={handlePress} style={styles.button}>
        <Text style={styles.buttonText}>Open Modal</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#007AFF',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});