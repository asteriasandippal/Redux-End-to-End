import React from 'react';
import SliderInput from '../../components/SliderInput';

function RgbSlider(props) {
    const position = props.value * 100 /255;
    const update = e => props.onChange(Math.ceil(e.target.value / 100 * 255));
    return (
        <SliderInput 
            label={props.label}
            type={props.type} 
            id={props.id}
            value={position}
            onChange={update}
        />
    );
}

export default RgbSlider;