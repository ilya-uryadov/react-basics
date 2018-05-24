import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';


class Form extends React.Component {
    constructor(props){
        super(props);

        this.state={};
        this.hendleSubmit = this.hendleSubmit.bind(this);
    }

    hendleSubmit(event){
        event.preventDefault();
        let title = this.refs.title.value;
        if (title) {
            this.props.onAdd(title);
            this.refs.title.value = '';
        }  
        //console.log("!!! "+this.refs.title.value);
    }

    render(){
        return (
            <form className="todo-form" onSubmit={this.hendleSubmit} > 
                <input type="text" ref="title" placeholder="Что нужно сделать?" />
                <Button type="submit"> Добавить </Button>
            </form>

        )
    }
}

Form.propTypes = {
    onAdd: PropTypes.func.isRequired

};

export default Form;