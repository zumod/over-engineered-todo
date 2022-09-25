import React, { useState, useEffect, useCallback } from 'react';
import List from './List';

const Form = () => {
    const [name, setName] = useState('');
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        console.log('todos', todos);
    }, [todos]);

    const submitTodo = (e) => {
        let uuid = crypto.randomUUID();
        name && setTodos([
            ...todos,
            {
                id: uuid,
                name,
                createdAt: new Date(),
            },
        ]);
    };

    const deleteTodo = useCallback((id) => {
        let result = todos.filter((todo) => todo.id !== id);
        setTodos(result);
    },[todos]);

    return (
        <>
            <div>Todo</div>
            <input
                type='text'
                placeholder='Enter tasks'
                onChange={(e) => setName(e.target.value)}
            ></input>
            <button type='submit' onClick={e=>submitTodo(e)}>submit</button>
            <br />
            <List todo={todos} deleteTodo={deleteTodo} />
        </>
    );
};

export default Form;
