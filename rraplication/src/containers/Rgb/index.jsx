import React, { Component } from 'react';
import {connect} from 'react-redux';
import RgbSlider from './RgbSlider';
import ShowBox from '../../components/ShowBox';

import * as actions from '../../actions/rgbActions';

class Rgb extends Component {

    render() {
        const {r, g, b, updateColor} = this.props;
        const update = color => value => updateColor(color, value);
        return (
        <div className="App">
            <ShowBox r={r} g={g} b={b} />
            <RgbSlider 
                label="Red"
                type="range" 
                id="sliderRange-red"
                value={r}
                onChange={update('r')}
            />
            <RgbSlider 
                label="Green"
                type="range" 
                id="sliderRange-green"
                value={g}
                onChange={update('g')}
            />
            <RgbSlider 
                label="Blue"
                type="range" 
                id="sliderRange-blue"
                value={b}
                onChange={update('b')}
            />
        </div>
        );
    }
}

export default connect(
    state => ({
        r: state.rgb.r,
        g: state.rgb.g,
        b: state.rgb.b
    }),
    {
        updateColor: actions.updateColor
    }
)(Rgb);
