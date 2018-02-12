import React from 'react';
//import todos from './todos';
import Header from './Components/Header';
import ToDo from './Components/ToDo';

function App(props) {
    return (
        <main> 
            <Header title={props.title} />

            <section className="todo-list">

                {props.todos.map(todos => 
                    <ToDo key={todos.id} title= {todos.title} complited={todos.completed} /> )}

                 
            </section>
        </main>
    );
}



export default App;