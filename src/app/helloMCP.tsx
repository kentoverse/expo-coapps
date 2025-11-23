

import React, { useEffect, useState } from 'react';
import {
    View, Image, Text, TextInput, Button, FlatList,
    TouchableOpacity, StyleSheet
} from 'react-native';
import { useMCPTodosStore } from '../store/useMCPStore';
import { GlassView, GlassContainer } from 'expo-glass-effect';

export const MCPTodosScreen = () => {
    const {
        session,
        mcpTodos,
        ragResponse,
        loading,
        error,
        fetchSession,
        fetchMCPTodos,
        addMCPTodo,
        updateMCPTodo,
        deleteMCPTodo,
        queryRag,
    } = useMCPTodosStore();

    const [newTitle, setNewTitle] = useState('');
    const [ragQuery, setRagQuery] = useState('');

    useEffect(() => {
        fetchSession();
        fetchMCPTodos();
    }, []);

    const handleAddTodo = async () => {
        if (!newTitle.trim()) return;
        await addMCPTodo({ title: newTitle });
        setNewTitle('');
    };

    const handleToggleComplete = async (todo: any) => {
        await updateMCPTodo(todo.id, { completed: !todo.completed });
    };

    const handleDelete = async (id: string) => {
        await deleteMCPTodo(id);
    };

    const handleRagQuery = async () => {
        if (!ragQuery.trim()) return;
        await queryRag(ragQuery);
        setRagQuery('');
    };

    return (
        <View style={styles.container}>
            <Image
                style={styles.backgroundImage}
                source={{
                    uri: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=600&fit=crop',
                }}
            />

            <Text style={styles.title}>MCPTodos</Text>

            {loading && <Text style={styles.loading}>Loading...</Text>}
            {error && <Text style={styles.error}>{error}</Text>}

            <Text style={styles.subtitle}>Add New Todo:</Text>
            <View style={styles.row}>
                <TextInput
                    style={styles.input}
                    value={newTitle}
                    onChangeText={setNewTitle}
                    placeholder="Todo title"
                />
                <Button title="Add" onPress={handleAddTodo} />
            </View>

            <FlatList
                data={mcpTodos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.todoRow}>
                        <TouchableOpacity onPress={() => handleToggleComplete(item)}>
                            <Text style={[styles.todoText, item.completed && styles.completed]}>
                                {item.title}
                            </Text>
                        </TouchableOpacity>
                        <Button title="Delete" color="red" onPress={() => handleDelete(item.id)} />
                    </View>
                )}
            />

            <Text style={styles.subtitle}>RAG Query:</Text>
            <View style={styles.row}>
                <TextInput
                    style={styles.input}
                    value={ragQuery}
                    onChangeText={setRagQuery}
                    placeholder="Enter query"
                />
                <Button title="Query" onPress={handleRagQuery} />
            </View>

            {ragResponse && (
                <View>
                    <View style={styles.responseContainer}>
                        <Text style={styles.responseTitle}>RAG Response:</Text>
                        <Text>{ragResponse}</Text>
                    </View>

                    <GlassContainer spacing={10} style={styles.containerStyle}>
                        <GlassView style={styles.glass1} isInteractive />
                        <GlassView style={styles.glass2} />
                        <GlassView style={styles.glass3} />
                    </GlassContainer>
                </View>
            )}
        </View>
    );
};


const styles = StyleSheet.create({
    container: { flex: 1 },
    backgroundImage: { ...StyleSheet.absoluteFillObject, width: '100%', height: '100%' },
    containerStyle: {
        position: 'absolute',
        top: 200,
        left: 50,
        width: 250,
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    glass1: { width: 60, height: 60, borderRadius: 30 },
    glass2: { width: 50, height: 50, borderRadius: 25 },
    glass3: { width: 40, height: 40, borderRadius: 20 },
});