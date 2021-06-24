import React from 'react';
import Card from 'react-bootstrap/Card';
import {Button} from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import Line from '../../assets/Group 4791.png';
import './styles.css';

const BuyNow = () => {
    return (
        <div className="buy-container">
            <h1>Basic ZRP Plan</h1>
            <img src={Line} width={350} height={5} />
            <Card>
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </div>
    );
}

export default BuyNow;