import React, { useState } from 'react';
import { DndProvider } from 'react-dnd'
import Card from './card.js'

function Board({ cards }) {
    return (
        <div className="ui cards card-div custom-scrollbar">
            {cards.map(item => (
                <Card card={item} key={item.key}>
                </Card>
            ))}
        </div>
    );
}

export default Board;