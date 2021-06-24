import React from 'react';
import './style.css';
import Sticker from '../Sticker/Sticker';
import Life from '../../assets/Image 4@2x.png';
import Zee from '../../assets/Image 6@2x.png';
import Data from '../../Data';
import {Link} from 'react-router-dom';

const Plan = () => {

    const handleClick = (heading) => {
        console.log(heading);
    };

    return (
            <div className="container">
                {Data.map((cards)=>(
                    <div className="card" style={{border: `2px solid `+ cards.color}} key={cards.key}>
                        <div className="pos">
                            <Sticker color={cards.color} heading={cards.heading} />
                        </div>
                        <div className="rupee">
                            <span  className="amount" style={{color: cards.color}}>&#8377; {cards.amount}  </span>
                            <span>+ {cards.subtitle}</span>
                        </div>
                        <div className="image">
                            {cards.key===2 ? <img src={Life} height={50} width= {50}/> : <div></div>}
                            {cards.key===3 ?
                                <> 
                                <div className="image-1">
                                    <img src={Life} height={50} width={50} />
                                </div>
                                <div className="image-2">
                                    <img src={Zee} height={50} width={50} />
                                </div>
                                </> : <div></div>
                                }
                        </div>
                        <div className="text">
                            <div className="text">
                                {cards.title}
                                <Link to={"/plans/"+cards.heading} className="button">
                                    Buy Now
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
    );
}

export default Plan;