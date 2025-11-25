

import React, { useEffect, useState } from 'react';
import {
    View, Image, Text, TextInput, Button, FlatList,
    TouchableOpacity, StyleSheet
} from 'react-native';
import { useMCPTodosStore } from '../store/useMCPStore';
import { GlassView, GlassContainer } from 'expo-glass-effect';

export const MCP= () => {
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
    container: { 
        flex: 1, 
        padding: 20, 
        backgroundColor: 'rgba(255,255,255,0.1)' 
    },
    backgroundImage: { 
        ...StyleSheet.absoluteFillObject, 
        width: '100%', 
        height: '100%' 
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginTop: 40,
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
        marginTop: 20,
        marginBottom: 10,
    },
    loading: {
        color: '#fff',
        textAlign: 'center',
        marginVertical: 10,
    },
    error: {
        color: 'red',
        textAlign: 'center',
        marginVertical: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginRight: 10,
        backgroundColor: 'rgba(255,255,255,0.9)',
        color: '#000',
    },
    todoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginVertical: 5,
        borderRadius: 8,
        backgroundColor: 'rgba(255,255,255,0.2)',
    },
    todoText: {
        fontSize: 16,
        color: '#fff',
    },
    completed: {
        textDecorationLine: 'line-through',
        color: '#888',
    },
    responseContainer: {
        marginTop: 20,
        padding: 15,
        borderRadius: 10,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    responseTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
        color: '#fff',
    },
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
    glass1: { 
        width: 60, 
        height: 60, 
        borderRadius: 30, 
        backgroundColor: 'rgba(255,255,255,0.2)' 
    },
    glass2: { 
        width: 50, 
        height: 50, 
        borderRadius: 25, 
        backgroundColor: 'rgba(255,255,255,0.2)' 
    },
    glass3: { 
        width: 40, 
        height: 40, 
        borderRadius: 20, 
        backgroundColor: 'rgba(255,255,255,0.2)' 
    },
});