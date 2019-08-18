import React, { useState } from 'react';
import { DndProvider } from 'react-dnd'

function Card({ card }) {
    return (
        <div className="ui fluid card">
            <div className="content">
                <div className="header">{card.title}</div>
                <div className="description">{card.description}</div>
            </div>
        </div>
    );
}

export default Card;