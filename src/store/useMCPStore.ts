import { create } from 'zustand';
import axios from 'axios';

interface MCPTodo {
    id: string;
    title: string;
    completed: boolean;
}

interface MCPTodosState {
    session: any | null;
    mcpTodos: MCPTodo[];
    ragResponse: string | null;
    loading: boolean;
    error: string | null;

    fetchSession: () => Promise<void>;
    fetchMCPTodos: () => Promise<void>;
    addMCPTodo: (todo: { title: string }) => Promise<void>;
    updateMCPTodo: (id: string, updates: Partial<MCPTodo>) => Promise<void>;
    deleteMCPTodo: (id: string) => Promise<void>;
    queryRag: (query: string) => Promise<void>;
}

export const useMCPTodosStore = create<MCPTodosState>((set) => ({
    session: null,
    mcpTodos: [],
    ragResponse: null,
    loading: false,
    error: null,

    fetchSession: async () => {
        set({ loading: true, error: null });
        try {
            const { data } = await axios.get('http://localhost:3100/api/session');
            set({ session: data, loading: false });
        } catch (err: any) {
            set({ error: err.message, loading: false });
        }
    },

    fetchMCPTodos: async () => {
        set({ loading: true, error: null });
        try {
            const { data } = await axios.get('http://localhost:3100/api/mcpTodos');
            set({ mcpTodos: data, loading: false });
        } catch (err: any) {
            set({ error: err.message, loading: false });
        }
    },

    addMCPTodo: async (todo) => {
        set({ loading: true, error: null });
        try {
            const { data } = await axios.post('http://localhost:3100/api/mcpTodos', todo);
            set((state) => ({
                mcpTodos: [...state.mcpTodos, data],
                loading: false,
            }));
        } catch (err: any) {
            set({ error: err.message, loading: false });
        }
    },

    updateMCPTodo: async (id, updates) => {
        set({ loading: true, error: null });
        try {
            const { data } = await axios.put(`http://localhost:3100/api/mcpTodos/${id}`, updates);
            set((state) => ({
                mcpTodos: state.mcpTodos.map((todo) => (todo.id === id ? data : todo)),
                loading: false,
            }));
        } catch (err: any) {
            set({ error: err.message, loading: false });
        }
    },

    deleteMCPTodo: async (id) => {
        set({ loading: true, error: null });
        try {
            await axios.delete(`http://localhost:3100/api/mcpTodos/${id}`);
            set((state) => ({
                mcpTodos: state.mcpTodos.filter((todo) => todo.id !== id),
                loading: false,
            }));
        } catch (err: any) {
            set({ error: err.message, loading: false });
        }
    },

    queryRag: async (query) => {
        set({ loading: true, error: null });
        try {
            const { data } = await axios.post('http://localhost:3100/api/rag/query', { query });
            set({ ragResponse: data.response, loading: false });
        } catch (err: any) {
            set({ error: err.message, loading: false });
        }
    },
}));

