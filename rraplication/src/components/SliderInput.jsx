import React from 'react';

function SliderInput(props) {
    return (
        <div className="form-group">
            <label htmlFor={props.id}>{props.label}</label>
            <input 
                type={props.type}
                className="form-control" 
                name={props.id} 
                id={props.id}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    );
}

export default SliderInput;
