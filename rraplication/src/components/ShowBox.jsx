import React from 'react';

function SliderBox(props) {
    const {r, g, b} = props;
    return (
        <div className="jumbotron jumbotron-fluid text-center" style={{backgroundColor: `rgb(${r}, ${g}, ${b})`}}>
            <div className="container">
            <h1 className="display-4">Change Color</h1>
            <p className="lead">Change Slider Show the effect of the Box</p>
            </div>
        </div>
    );
}

export default SliderBox;
