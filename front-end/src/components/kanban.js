import React, { useState } from 'react';
import KanbanColumn from './kanbanColumn.js'

const Kanban = () => {

    const columns = [{ type: "0", name: "Backlog" },
    { type: "1", name: "To do" },
    { type: "2", name: "In progress" },
    { type: "3", name: "Testing" },
    { type: "4", name: "Done" }]

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

    return (
        <div className="main-div">
            <table className="kanban-table">
                <thead>
                    <tr>
                        {columns.map(column => (
                            <th key={column.type}>{column.name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {columns.map(column => (
                            <KanbanColumn key={column.type} cards={getBoardCard(column.type)} newCard={(card) => newCard(card)} alterCard={(newC) => alterCard(newC)} data={column}></KanbanColumn>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div >
    );
}

export default Kanban;