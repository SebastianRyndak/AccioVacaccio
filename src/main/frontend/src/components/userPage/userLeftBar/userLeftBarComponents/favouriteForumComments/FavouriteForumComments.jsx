import React from 'react';
import {Card} from "react-bootstrap";

const FavouriteForumComments = () => {
    return (
        <Card
        bg="dark"
        key={"dark"}
        text={'white'}
        className="mb-2 right">
        <Card.Header style={{textAlign: "center", color: "orange"}}><h2>Favourite comments</h2></Card.Header>
        <Card.Body>
            <Card.Text>
                ULUBIONE KOMENTARZE
            </Card.Text>
        </Card.Body>
    </Card>
    );
};

export default FavouriteForumComments;