import React from "react";
import PropTypes from "prop-types";

function Button (props) {
    return (
        <botton className={props.className}>
            <i className="material-icons">{props.icon}</i>
        </botton>
    );  
}
Button.propTypes = {
    className: PropTypes.string.isRequired, 
    icon: PropTypes.string
}

export default Button;