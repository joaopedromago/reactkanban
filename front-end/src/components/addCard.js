import React from 'react';

const AddCard = ({ data, newCard }) => {
    const addNewCard = (name, type) => {
        const uuidv1 = require('uuid/v4');

        let cardN = {
            key: uuidv1(new Date()),
            title: name,
            description: 'Clique para definir as informações deste card',
            creationDate: new Date(),
            type: type,
            color: 'green'
        }
        newCard(cardN);
    };

    return (
        <button className="ui labeled icon inverted fluid blue button" onClick={() => addNewCard(data.name, data.type)}>
            <i className="icon plus"></i>
            Adicionar Card
            </button>
    );
}

export default AddCard;