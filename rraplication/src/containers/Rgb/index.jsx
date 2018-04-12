import React, { Component } from 'react';
import RgbSlider from './RgbSlider';
import ShowBox from '../../components/ShowBox';

class Rgb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            r: 244,
            g: 158,
            b: 66
        }
    }


    render() {
        const {r, g, b} = this.state;
        const update = color => val => this.setState({[color] : val});
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

export default Rgb;
