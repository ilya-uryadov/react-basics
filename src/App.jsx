import React from 'react';
//import ReactDOM from 'react-dom';
//import todos from './todos';
import Header from './Components/Header';
import ToDo from './Components/ToDo';
//import PropTypes from 'prop-types';
import Form from './Components/Form';

class App extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            todos: this.props.initialData
        }
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAdd=this.handleAdd.bind(this);
        this.nextId= this.nextId.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    nextId(){
        this._nextId= this._nextId || 4;
        return this._nextId++;
    }

    handleAdd(title){
        let todo = {
            id: this.nextId(),
            title,
            completed: false
        };

        let todos = [...this.state.todos, todo];
        this.setState({todos});
    }

    handleStatusChange(id) {
            let todos = this.state.todos.map( todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            });
        this.setState({todos:todos});
    }

    handleDelete(id) {
        let todos = this.state.todos.filter(todo => todo.id !==id);
        this.setState({todos:todos});
    }

    handleEdit(id, title){
        let todos = this.state.todos.map( todo => {
            if (todo.id === id) {
                todo.title = title;
            }
            return todo;
        });
        this.setState({todos});
    }

    render() {
        return (
            <main>
                <Header title={this.props.title}  todos={this.state.todos}/>
                <section className="todo-list">
                    {this.state.todos.map(todos =>
                        <ToDo 
                            key={todos.id} 
                            id={todos.id}
                            title={todos.title} 
                            completed={todos.completed} 
                            onStatusChange={this.handleStatusChange} 
                            onDelete={this.handleDelete}
                            onEdit={this.handleEdit}
                        />)}
                </section>
                <Form onAdd={this.handleAdd}/>
            </main>
    );
    }
}


export default App;