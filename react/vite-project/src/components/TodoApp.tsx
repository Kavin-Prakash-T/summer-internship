import { useState } from 'react';

interface Todo {
    id: number;
    text: string;
}

export default function TodoApp() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [input, setInput] = useState('');
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editText, setEditText] = useState('');

    const addTodo = () => {
            const newTodo: Todo = {
                id: Date.now(),
                text: input,
            };
            setTodos([...todos, newTodo]);
            setInput('');
    };

    const startEdit = (id: number, currentText: string) => {
        setEditingId(id);
        setEditText(currentText);
    };

    const saveEdit = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, text: editText } : todo
            )
        );
        setEditingId(null);
        setEditText('');
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };


    return (
        <div>
            <h1>Todo Application</h1>

            <div>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter a new todo"
                />
                <button onClick={addTodo}>Add Todo</button>
            </div>

            <h2>Todos ({todos.length})</h2>

            {todos.length === 0 ? (
                <p>No todos yet. Add one above!</p>
            ) : (
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id}>

                            {editingId === todo.id ? (
                                <>
                                    <input
                                        type="text"
                                        value={editText}
                                        onChange={(e) => setEditText(e.target.value)}
                                    />
                                    <button onClick={() => saveEdit(todo.id)}>Save</button>
                                    <button onClick={() => setEditingId(null)}>Cancel</button>
                                </>
                            ) : (
                                <>
                                    <span>
                                        {todo.text}
                                    </span>
                                    <button onClick={() => startEdit(todo.id, todo.text)}>Edit</button>
                                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
