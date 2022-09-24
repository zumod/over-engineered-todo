import React, { useEffect } from 'react';
import './App.css';
import Form from './components/Form';

function App() {
    useEffect(() => {
        console.log('Rendering');
        return () => {
            console.log('Unmounted');
        };
    }, []);

    return (
        <div className='App'>
            <Form />
        </div>
    );
}

export default App;
