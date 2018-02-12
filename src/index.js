import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import App from './App';

App.propTypes = {
    title: PropTypes.string 
};

ReactDOM.render(<App title='React ToDo' />, document.getElementById('root'));