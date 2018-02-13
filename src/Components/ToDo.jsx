import React from "react";
import PropTypes from "prop-types";
import CheckBox from "./CheckBox";
import Button from "./Button";

function Todo(props) {
 return (
    <div className= {props.completed ? 'todo completed' : 'todo'}>
                    <CheckBox initiallyChecked={props.completed}  />

                    <span className="todo-title">{props.title}</span>

                    <Button className={"delete icon"} icon = {'delete'} />
    </div>
 );   
}

Todo.propTypes = {
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
}

export default Todo;