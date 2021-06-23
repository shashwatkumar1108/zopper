import React from 'react';
import './styles.css';
import Logo from '../../assets/ZRP Logo@2x.png';
import Group from '../../assets/Group 4759@2x.png';

const Rewards = () => {
    return (
        <div className="container">
            <div className="box">
                <img src={Logo} width={200} height={150}></img>
            </div>
            <div className="box">
                <img src={Group} width={200} height={150}></img>
            </div>
        </div>
    );
}

export default Rewards;