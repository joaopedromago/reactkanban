import React, { useState } from 'react';
import { DndProvider } from 'react-dnd'
import Board from './board.js'
import AddCard from './addCard.js'

function Kanban() {
    const getBoardCard = (type) => {
        return cards.filter(x => x.type === type);
    }
    const addCard = (card) => {
        setCard([...cards, card]);
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
                        <td>
                            <Board cards={getBoardCard("0")}></Board>
                            <AddCard data={{ type: "0", name: "Backlog", newCard: (card) => addCard(card) }}></AddCard>
                        </td>
                        <td>
                            <Board cards={getBoardCard("1")}></Board>
                            <AddCard data={{ type: "1", name: "To do", newCard: (card) => addCard(card) }}></AddCard>
                        </td>
                        <td>
                            <Board cards={getBoardCard("2")}></Board>
                            <AddCard data={{ type: "2", name: "In progress", newCard: (card) => addCard(card) }}></AddCard>
                        </td>
                        <td>
                            <Board cards={getBoardCard("3")}></Board>
                            <AddCard data={{ type: "3", name: "Testing", newCard: (card) => addCard(card) }}></AddCard>
                        </td>
                        <td>
                            <Board cards={getBoardCard("4")}></Board>
                            <AddCard data={{ type: "4", name: "Done", newCard: (card) => addCard(card) }}></AddCard>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div >
    );
}

export default Kanban;