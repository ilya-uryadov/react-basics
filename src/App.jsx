import React from 'react';
import todos from './todos';
import Header from './Components/Header';
import ToDo from './Components/ToDo';

function App(props) {
    return (
        <main> 
            <Header title={props.title} />

            <section className="todo-list">

                <ToDo title= {'Изучить JS'} complited={true} />
                <ToDo title= {'Изучить React'} complited={false} />
                 
            </section>
        </main>
    );
}



export default App;