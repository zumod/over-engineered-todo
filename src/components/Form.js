import React, { useState, useEffect } from 'react';
import List from './List'

const Form = () => {
    const [name, setName] = useState('');
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        console.log('todos', todos);
    }, [todos]);

    const submitHandler = () => {
        let uuid = crypto.randomUUID();
        setTodos([
            ...todos,
            {
                id: uuid,
                name,
                createdAt: new Date(),
            },
        ]);
    };
    return (
        <>
            <div>Form</div>
            <input
                type='text'
                onChange={(e) => setName(e.target.value)}
            ></input>
            <button type='submit' onClick={(e) => submitHandler()}></button>
            <br />
            <List todo={todos}/>
        </>
    );
};

export default Form;
