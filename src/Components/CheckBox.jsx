import React from "react";
import PropTypes from "prop-types";

function CheckBox (props) {

    return(
            <botton className = "checkbox icon"  >
            <i className="material-icons"> {props.checked ? 'check_box' : 'check_box_outline_blank'}  </i>
            </botton>
        ); 
    }


CheckBox.propTypes = {
    checked: PropTypes.bool.isRequired
};


export default CheckBox;