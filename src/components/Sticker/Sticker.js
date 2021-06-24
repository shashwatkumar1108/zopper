import React from 'react';
import './style.css';

const Sticker = ({color, heading}) => {
    const style = {
        backgroundColor: color
    };
    
    const styleRight = {
        borderLeft: `10px solid `+color,
        backgroundColor: color
    };

    const styleLeft = {
        borderRight: `10px solid `+color,
        backgroundColor: color
    };

    return (
        <div className="title">
            <div className="left-triangle" style={styleLeft}>
                
            </div>
            <div className="rectangle" style={style}>
                {heading}
            </div>
            <div className="right-triangle" style={styleRight}>
                
            </div>
        </div>
    );
}

export default Sticker;