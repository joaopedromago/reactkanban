import React from 'react';
import { useDrop } from 'react-dnd'
import Board from './board.js'
import AddCard from './addCard.js'

const KanbanColumn = ({ cards, data, newCard, alterCard, deleteCard, columns }) => {

    // eslint-disable-next-line
    const [{ canDrop, isOver }, drop] = useDrop({
        accept: 'card',
        drop: () => ({ name: data.type }),
        collect: monitor => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        })
    })

    return (
        <td ref={drop}>
            <Board cards={cards} alterCard={(card) => alterCard(card)} deleteCard={(key) => deleteCard(key)} columns={columns}></Board>
            <AddCard data={data} newCard={(newC) => newCard(newC)}></AddCard>
        </td >
    );
}

export default KanbanColumn;