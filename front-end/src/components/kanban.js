import React, { useState } from 'react';
import KanbanColumn from './kanbanColumn.js'

function Kanban() {
    const getBoardCard = (type) => {
        return cards.filter(x => x.type === type);
    }
    const newCard = (card) => {
        setCard([...cards, card]);
    }

    const alterCard = (newCard) => {
        let auxCards = cards.slice();
        for (var i in auxCards) {
            if (auxCards[i].key === newCard.key) {
                auxCards[i] = newCard;
                break;
            }
        }

        setCard(auxCards);
    }

    const [cards, setCard] = useState([]);

    return (
        <div className="main-div">
            <table className="kanban-table">
                <thead>
                    <tr>
                        <th>Backlog</th>
                        <th>To do</th>
                        <th>In progress</th>
                        <th>Testing</th>
                        <th>Done</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <KanbanColumn name="0" cards={getBoardCard("0")} newCard={(card) => newCard(card)} alterCard={(newC) => alterCard(newC)} data={{ type: "0", name: "Backlog" }}></KanbanColumn>
                        <KanbanColumn name="1" cards={getBoardCard("1")} newCard={(card) => newCard(card)} alterCard={(newC) => alterCard(newC)} data={{ type: "1", name: "To do" }}></KanbanColumn>
                        <KanbanColumn name="2" cards={getBoardCard("2")} newCard={(card) => newCard(card)} alterCard={(newC) => alterCard(newC)} data={{ type: "2", name: "In progress" }}></KanbanColumn>
                        <KanbanColumn name="3" cards={getBoardCard("3")} newCard={(card) => newCard(card)} alterCard={(newC) => alterCard(newC)} data={{ type: "3", name: "Testing" }}></KanbanColumn>
                        <KanbanColumn name="4" cards={getBoardCard("4")} newCard={(card) => newCard(card)} alterCard={(newC) => alterCard(newC)} data={{ type: "4", name: "Done" }}></KanbanColumn>
                    </tr>
                </tbody>
            </table>
        </div >
    );
}

export default Kanban;