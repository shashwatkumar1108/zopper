import React from 'react';
import './style.css';

const Sticker = ({color, heading}) => {
    const style = {
        backgroundColor: color
    };
    
    return (
        <div className="title">
            <div className="left-triangle">
                L
            </div>
            <div className="rectangle" style={style}>
                {heading}
            </div>
            <div className="right-triangle">
                R
            </div>
        </div>
    );
}

export default Sticker;