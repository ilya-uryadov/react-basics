import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import App from './App';
//import ToDo from './Components/ToDo';
import todos from './todos';

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
