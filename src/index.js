import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import App from './App';

App.propTypes = {
    title: PropTypes.string,
    todos: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    })   
    ).isRequired
};

ReactDOM.render(<App title='React ToDo' />, document.getElementById('root'));