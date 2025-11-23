import React, { useRef } from 'react';
import { DotLottie, type Dotlottie } from '@lottiefiles/dotlottie-react-native';
import { View, ViewStyle, Button, StyleSheet } from 'react-native';

interface DotLottieProps {
  style?: ViewStyle;
  source: string | { uri: string };
}



export default function AnimateDotLot({ }: DotLottieProps) {
  const ref = useRef<Dotlottie>(null);

  return (

    <View style={styles.container}>
      <DotLottie
        ref={ref}
        source={require('./animation.lottie')}
        style={styles.animation}
        loop={false}
        autoplay={false}
      />
      <View style={styles.controls}>
        <Button title="Play" onPress={() => ref.current?.play()} />
        <Button title="Pause" onPress={() => ref.current?.pause()} />
        <Button title="Stop" onPress={() => ref.current?.stop()} />
      </View>
    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animation: {
    width: 200,
    height: 200,
  },
  controls: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 20,
  },
});



