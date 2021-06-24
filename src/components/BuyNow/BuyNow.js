import React from 'react';
import Line from '../../assets/Group 4791.png';
import './styles.css';
import { useState } from 'react';
import axios from 'axios';

const BuyNow = () => {

    const [title, setTitle]=useState("");
    const [body, setBody]=useState("");
    const [user, setUser]=useState("");

    const titleHandler = (e) => {
        setTitle(e.target.value);
    }

    const bodyHandler = (e) => {
        setBody(e.target.value);
    }

    const userHandler = (e) => {
        setUser(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const plan = {
            t: title,
            b: body,
            u: user,
        };
        axios.post("https://jsonplaceholder.typicode.com/posts", plan)
        .then((res) => window.alert('Success'));
    }

    return (
        <div className="buy-container">
            <h1>Basic ZRP Plan</h1>
            <img src={Line} width={350} height={5} />
            <form className="form" onSubmit={handleSubmit}>
                <div className="json">
                    JSON Placeholder Post
                </div>
                <div className="body">
                    <div className="inputs">
                        <div className="input-1"><input type="text" placeholder="Title" className="field" value={title} onChange={titleHandler}></input></div>
                        <div className="input-2"><input type="text" placeholder="Body" className="field" value={body} onChange={bodyHandler}></input></div>
                        <div className="input-3"><input type="text" placeholder="UserId" className="field" value={user} onChange={userHandler}></input></div>
                    </div>
                    <div>
                        <input type="submit" className="submit"></input>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default BuyNow;