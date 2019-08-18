import React from 'react';
import { useDrop } from 'react-dnd'
import Board from './board.js'
import AddCard from './addCard.js'

function KanbanColumn({ cards, data, name, newCard, alterCard }) {


    const [{ canDrop, isOver }, drop] = useDrop({
        accept: 'card',
        drop: (props) => ({ name: name }),
        collect: monitor => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        })
    })

    return (
        <td ref={drop}>
            <Board cards={cards} alterCard={(card) => alterCard(card)}></Board>
            <AddCard data={data} newCard={(newC) => newCard(newC)}></AddCard>
        </td>
    );
}

export default KanbanColumn;