import React from 'react';
import ReactDOM from 'react-dom';
import todos from './todos';
import Header from './Components/Header';
import ToDo from './Components/ToDo';
import PropTypes from 'prop-types';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: this.props.inatialData
        };
    }

    render() {
        return (
            <main>
                <Header title={this.props.title} />
                <section className="todo-list">
                    {this.state.todos.map(todos =>
                        <ToDo key={todos.id} title={todos.title} completed={todos.completed} />)}
                </section>
            </main>
        );
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