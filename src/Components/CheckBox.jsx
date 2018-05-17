import React from "react";
import PropTypes from "prop-types";

<<<<<<< HEAD
function CheckBox (props) {

    return(
            <botton className = "checkbox icon"  >
            <i className="material-icons"> {props.checked ? 'check_box' : 'check_box_outline_blank'}  </i>
            </botton>
        ); 
    }


CheckBox.propTypes = {
    checked: PropTypes.bool.isRequired
=======
function CheckBox (props)  {

    return(
            <button className = "checkbox icon" onClick={props.onChange}>
            <i className="material-icons"> {props.checked ? 'check_box' : 'check_box_outline_blank'}  </i>
            </button>
    ); 
}

CheckBox.propTypes = {
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired

>>>>>>> components
};


export default CheckBox;