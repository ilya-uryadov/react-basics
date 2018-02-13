import React from "react";
import PropTypes from "prop-types";

class CheckBox extends React.Component  {
    constructor () {
        super();
        this.state = {
            checked: this.props.initiallyChecked,   
        };

        this.hendleClick = this.hendleClick.bind(this);
    }

    hendleClick(event) {
        this.setState({
            checked: !this.state.checked, 
        }, ()=> console.log(this.state.checked) );
    }

    render () {
        return (
            <botton className="checkbox icon" onClick={this.hendleClick}>
                <i className="material-icons"> {this.state.checked ? 'check_box' : 'check_box_outline_blank'}  </i>
            </botton>
        ); 
    }
}

CheckBox.propTypes = {
    initiallyChecked: PropTypes.bool.isRequired
};


export default CheckBox;