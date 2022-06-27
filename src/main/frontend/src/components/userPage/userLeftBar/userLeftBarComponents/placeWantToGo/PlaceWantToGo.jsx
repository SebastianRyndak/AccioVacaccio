import React from 'react';
import {Card} from "react-bootstrap";

const PlaceWantToGo = () => {
    return (
        <Card
            bg="dark"
            key={"dark"}
            text={'white'}
            className="mb-2 right">
            <Card.Header style={{textAlign: "center", color: "orange"}}><h2>Place want to go</h2></Card.Header>
            <Card.Body>
                <Card.Text>
                    MIEJSCA GDZIE CHCĘ JECHAC
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default PlaceWantToGo;