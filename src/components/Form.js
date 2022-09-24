import React, { useState, useEffect } from 'react';
import List from './List';

const Form = () => {
    const [name, setName] = useState('');
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        console.log('todos', todos);
    }, [todos]);

    const submitHandler = (e) => {
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

    const deleteTodo = (id) => {
        let result = todos.filter((todo) => todo.id !== id);
        setTodos(result);
    };

    return (
        <>
            <div>Todo</div>
            <input
                type='text'
                placeholder='Enter tasks'
                onChange={(e) => setName(e.target.value)}
            ></input>
            <button type='submit' onClick={e=>submitHandler(e)}>submit</button>
            <br />
            <List todo={todos} deleteTodo={deleteTodo} />
        </>
    );
};

export default Form;
