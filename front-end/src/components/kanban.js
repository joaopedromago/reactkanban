import React, { useState } from 'react';
import KanbanColumn from './kanbanColumn.js'
import { Popup, Select } from 'semantic-ui-react'
import CardColors from '../models/cardColor.js'

const Kanban = () => {

    const [columns, setColumns] = useState([{ type: "0", name: "Backlog", color: "blue" },
    { type: "1", name: "To do", color: "red" },
    { type: "2", name: "In progress", color: "green" },
    { type: "3", name: "Testing", color: "yellow" },
    { type: "4", name: "Done", color: "olive" }]);

    const [newName, setNewName] = useState('new column');
    const [newColor, setNewColor] = useState('grey');
    const [cards, setCard] = useState([]);
    const [currentChangeColumn, setCurrentChangeColumn] = useState(null);

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

    const deleteCardByType = (type) => {
        let auxCards = cards.slice();
        for (let i in auxCards) {
            if (auxCards[i].type === type) {
                auxCards.splice(i, 1);
            }
        }

        setCard(auxCards);
    }

    const newColumn = () => {
        let nextType = 0;
        for (let i in columns) {
            if (parseInt(columns[i].type) >= nextType) {
                nextType = parseInt(columns[i].type) + 1;
            }
        }

        setColumns([...columns, {
            type: nextType.toString(),
            name: ""
        }]);
        setCurrentChangeColumn(nextType.toString());
        setNewName('new column');
    }

    const alterColumn = (type) => {
        let newColumn = {
            type: type,
            name: newName,
            color: newColor
        };
        let auxColumns = columns.slice();
        for (let i in auxColumns) {
            if (auxColumns[i].type === newColumn.type) {
                auxColumns[i] = newColumn;
                break;
            }
        }

        setCurrentChangeColumn(null);
        setColumns(auxColumns);
        setNewName('new column');
    }

    const deleteColumn = (key) => {
        if (columns.length > 1) {
            let auxColumns = columns.slice();
            for (let i in auxColumns) {
                if (auxColumns[i].type === key) {
                    auxColumns.splice(i, 1);
                    break;
                }
            }
            deleteCardByType(key);
            setColumns(auxColumns);
        }
    }

    const selectColumn = (column) => {
        setNewName(column.name);
        setCurrentChangeColumn(column.type);
    }

    const handleInputChange = (event) => {
        setNewName(event.target.value);
    }

    const handleSelectChange = (event, { value, name }) => {
        setNewColor(value);
    }

    return (
        <div className="main-div">
            <div className="title-div">
                React Kanban - by João Mago <button className="ui primary icon labeled button right floated" onClick={() => newColumn()}><i className="plus icon" ></i>Nova coluna</button>
            </div>
            <table className="ui unstackable celled table kanban-table">
                <thead>
                    <tr>
                        {columns.map(column =>
                            column.type === currentChangeColumn ? (
                                <th key={column.type}>
                                    <form class="ui form">
                                        <div class="field">
                                            <label>Name</label>
                                            <input type="text" placeholder="New column name" value={newName} onChange={handleInputChange} />
                                        </div>
                                        <div class="field">
                                            <label>Color</label>
                                            <Select
                                                control={Select}
                                                options={CardColors}
                                                label='Color'
                                                placeholder='Color'
                                                value={newColor}
                                                onChange={handleSelectChange}
                                                name='color'
                                            />
                                        </div>
                                        {newName.length >= 3 && (<Popup content='Save column' trigger={<button className="ui positive tiny circular icon button" onClick={() => alterColumn(column.type)}><i className="check icon"></i></button>} />)}
                                        <Popup content='Delete column' trigger={<button className="ui negative tiny circular icon button" onClick={() => deleteColumn(column.type)}><i className="times icon"></i></button>} />
                                        {newName.length >= 3 && (<button className="ui grey tiny button" onClick={() => setCurrentChangeColumn(null)}>Cancel</button>)}
                                    </form>
                                </th>
                            ) :
                                (
                                    <th key={column.type} onClick={() => selectColumn(column)} className="hand-cursor">
                                        <span className={'ui ribbon label ' + column.color}>{column.name}</span>
                                    </th>
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