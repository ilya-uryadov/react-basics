import React from "react";
import PropTypes from "prop-types";

class CheckBox extends React.Component  {
    constructor () {
        super();
        this.state = {
            checked: false    
        }
    }
    render () {
        return (
            <botton className="checkbox icon">
                <i className="material-icons"> {this.state.checked ? 'check_box' : 'check_box_outline_blank'}  </i>
            </botton>
        ); 
    }
}



export default CheckBox;