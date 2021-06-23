import React from 'react';
import './style.css';
import Sticker from '../Sticker';

const Plan = () => {
    return (
        <div className="card">
            <div className="pos">
                <Sticker color={"cyan"} heading={"Basic"}/>
            </div>
        </div>
    );
}

export default Plan;