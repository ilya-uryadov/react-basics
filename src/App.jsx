import React from 'react';
import ReactDOM from 'react-dom';
import todos from './todos';
import Header from './Components/Header';
import ToDo from './Components/ToDo';
import PropTypes from 'prop-types';

class App extends React.Component {
<<<<<<< HEAD
    constructor(props) {
        super(props);
        this.state = {
            todos: this.props.inatialData
        };
    }

=======

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

>>>>>>> components
    render() {
        return (
            <main>
                <Header title={this.props.title} />
                <section className="todo-list">
                    {this.state.todos.map(todos =>
<<<<<<< HEAD
                        <ToDo key={todos.id} title={todos.title} completed={todos.completed} />)}
                </section>
            </main>
        );
=======
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
>>>>>>> components
    }
}

App.propTypes = {
    title: PropTypes.string,
    initialData: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    })   
    ).isRequired
};

App.defaultProps = {
    title: 'React ToDo'
};

ReactDOM.render(<App initialData={todos} />, document.getElementById('root'));



export default App;