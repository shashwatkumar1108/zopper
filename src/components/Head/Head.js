import React from 'react';
import Line from '../../assets/Group 4791.png';
import './styles.css';

const Head = () => {
    return (
        <div className="head">
            <div className="title">
                <h2>Zopper Plans</h2>
            </div>
            <div className="underline">
                <img src={Line} width={200} height={5}/>
            </div>
        </div>
    );
}

export default Head;