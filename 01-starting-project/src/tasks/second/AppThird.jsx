import React from 'react';

import Todo from './Todo'
import './styles.css';

// don't remove the export keyword here!
export const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!'
];

// don't change the Component name "App"
export default function App() {

    return (
        <ul>
            {DUMMY_TODOS.map((index) => (
                <Todo words={index}/>
            ))}
        </ul>
    );
}