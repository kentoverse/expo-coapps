// src/components/ProfileLink.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

interface ProfileLinkProps {
    name: string; // name to pass as param
}

const ProfileLink: React.FC<ProfileLinkProps> = ({ name }) => {
    return (
        <Link
            href={{ pathname: '/profile', params: { name } }}
            asChild
        >
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Go to {name}'s Profile</Text>
            </TouchableOpacity>
        </Link>
    );
};



const styles = StyleSheet.create({
    button: {
        padding: 16,
        margin: 12,
        backgroundColor: '#6200ee',
        borderRadius: 8,
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
});


export default ProfileLink;