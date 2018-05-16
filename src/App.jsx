import React from 'react';
//import todos from './todos';
import Header from './Components/Header';
import ToDo from './Components/ToDo';

class App extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            todos: this.props.initialData
        }
        this.hendleStatusChange = this.hendleStatusChange.bind(this);
    }

    hendleStatusChange(id) {
        console.log('onStatusChange', id);
    }

    render() {
        return (
            <main>
                <Header title={this.props.title} />
                <section className="todo-list">
                    {this.state.todos.map(todos =>
                        <ToDo 
                            key={todos.id} 
                            id={todos.id}
                            title={todos.title} 
                            completed={todos.completed} 
                            onStatusChange={this.hendleStatusChange} 
                        />)}
                </section>
            </main>
    );
    }
}





export default App;