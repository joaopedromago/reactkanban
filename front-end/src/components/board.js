import React from 'react';
import Card from './card.js'

const Board = ({ cards, alterCard, deleteCard, columns }) => {

    return (
        <div className="ui cards card-div custom-scrollbar">
            {cards.map(item => (
                <Card card={item} key={item.key} alterCard={(card) => alterCard(card)} deleteCard={(key) => deleteCard(key)} columns={columns}>
                </Card>
            ))}
        </div>
    );
}

export default Board;