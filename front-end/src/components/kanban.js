import React, { useState, useEffect } from 'react';
import KanbanColumn from './kanbanColumn.js'
import { Popup, Select } from 'semantic-ui-react'
import CardColors from '../models/cardColor.js'
import Environment from '../environment/environment'
import ColumnDefault from '../models/columnModel'
import axios from 'axios'

const Kanban = () => {

    const [columns, setColumns] = useState(ColumnDefault);

    const [newName, setNewName] = useState('new column');
    const [newColor, setNewColor] = useState('grey');
    const [cards, setCard] = useState([]);
    const [currentChangeColumn, setCurrentChangeColumn] = useState(null);

    useEffect(() => {
        axios.get(Environment.urlBackEnd + 'cards')
            .then(res => {
                setCard(res.data);
                console.log(res.data)
            });

        axios.get(Environment.urlBackEnd + 'columns')
            .then(res => {
                setColumns(res.data);
            });
    }, [])

    const getBoardCard = (type) => {
        return cards.filter(x => x.type === type);
    }

    const newCard = (card) => {
        setCard([...cards, card]);

        axios.post(Environment.urlBackEnd + 'cards', card)
            .then(res => {
            });
    }

    const alterCard = (newCard) => {
        let auxCards = cards.slice();
        for (let i in auxCards) {
            if (auxCards[i].key === newCard.key) {
                auxCards[i] = newCard;
                break;
            }
        }

        axios.post(Environment.urlBackEnd + 'cards', newCard)
            .then(res => {
            });
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

        axios.delete(Environment.urlBackEnd + 'cards/' + key);
        setCard(auxCards);
    }

    const deleteCardByType = (type) => {
        let auxCards = cards.slice();
        for (let i in auxCards) {
            if (auxCards[i].type === type) {
                axios.delete(Environment.urlBackEnd + 'cards/' + auxCards[i].key);
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

        const newObj = {
            type: nextType,
            name: newName,
            color: newColor
        };

        setNewName('new column');
        setCurrentChangeColumn(nextType);
        setColumns([...columns, newObj]);
        console.log(newObj)
        axios.post(Environment.urlBackEnd + 'columns', newObj);
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

        axios.post(Environment.urlBackEnd + 'columns', newColumn);
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

        axios.delete(Environment.urlBackEnd + 'columns/' + key);
    }

    const selectColumn = (column) => {
        setNewName(column.name);
        setNewColor(column.color);
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
                {/* eslint-disable-next-line */}
                React Kanban - by <a href="https://github.com/joaopedromago" target="_blank">João Mago</a> <button className="ui primary icon labeled button right floated" onClick={() => newColumn()}><i className="plus icon" ></i>Nova coluna</button>
            </div>
            <table className="ui unstackable celled table kanban-table">
                <thead>
                    <tr>
                        {columns.map(column =>
                            column.type === currentChangeColumn ? (
                                <th key={column.type}>
                                    <form className="ui form">
                                        <div className="field">
                                            <label>Name</label>
                                            <input type="text" placeholder="New column name" value={newName} onChange={handleInputChange} />
                                        </div>
                                        <div className="field">
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