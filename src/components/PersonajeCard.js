import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const PersonajeCard = ({nombre, img, genero, estado}) => {

    return(
        
        <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>Género: {genero}</Card.Text>
                <Card.Text>Estado: {estado}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}