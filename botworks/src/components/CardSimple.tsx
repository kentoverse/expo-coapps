// src/components/SimpleCard.tsx
import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

interface CardProps {
  title: string;
  description?: string;
  onPress?: () => void;
}



const CardSimple: React.FC<CardProps> = ({ title, description, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.title}>{title}</Text>
      {description ? <Text style={styles.description}>{description}</Text> : null}
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
});



export default CardSimple;