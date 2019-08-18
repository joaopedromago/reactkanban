import React, { useState } from 'react';
import KanbanColumn from './kanbanColumn.js'

const Kanban = () => {

    const columns = [{ type: "0", name: "Backlog", color: "blue" },
    { type: "1", name: "To do", color: "red" },
    { type: "2", name: "In progress", color: "green" },
    { type: "3", name: "Testing", color: "yellow" },
    { type: "4", name: "Done", color: "olive" }]

    const [cards, setCard] = useState([]);

    const getBoardCard = (type) => {
        return cards.filter(x => x.type === type);
    }

    const newCard = (card) => {
        setCard([...cards, card]);
    }

    const alterCard = (newCard) => {
        let auxCards = cards.slice();
        for (let i in auxCards) {
            if (auxCards[i].key === newCard.key) {
                auxCards[i] = newCard;
                break;
            }
        }

        setCard(auxCards);
    }

    const deleteCard = (key) => {
        let auxCards = cards.slice();
        for (let i in auxCards) {
            if (auxCards[i].key === key) {
                auxCards.splice(i, 1);
                break;
            }
        }

        setCard(auxCards);
    }

    return (
        <div className="main-div">
            <div className="title-div">
                React Kanban - by João Mago
            </div>
            <table className="ui unstackable celled table kanban-table">
                <thead>
                    <tr>
                        {columns.map(column => (
                            <th key={column.type}><span className={'ui ribbon label ' + column.color}>{column.name}</span></th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {columns.map(column => (
                            <KanbanColumn key={column.type} cards={getBoardCard(column.type)} newCard={(card) => newCard(card)} alterCard={(newC) => alterCard(newC)} data={column} deleteCard={(key) => deleteCard(key)}></KanbanColumn>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div >
    );
}

export default Kanban;