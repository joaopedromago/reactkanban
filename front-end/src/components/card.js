import React, { useState, useRef } from 'react';
import { useDrag } from 'react-dnd'
import CardModal from './cardModal.js'

function Card({ card, alterCard }) {

    const [isDragging, drag] = useDrag({
        item: { id: card, type: 'card' },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult()
            if (item && dropResult) {
                item.id.type = dropResult.name;
                alterCard(item.id);
            }
        },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const refModal = useRef();
    return (
        <div ref={drag} className={'ui fluid card hand-cursor ' + card.color} onClick={() => refModal.current.changeState()}>
            <div className="content">
                <div className="header">{card.title}</div>
                <div className="description">{card.description}</div>
            </div>
            <CardModal ref={refModal} card={card} alterCard={() => alterCard()}></CardModal>
        </div>
    );
}

export default Card;