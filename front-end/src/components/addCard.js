import React, { useState } from 'react';

function AddCard({ data }) {
    const addCard = (name, type) => {
        const uuidv1 = require('uuid/v4');

        let newCard = {
            key: uuidv1(new Date()),
            title: name,
            description: 'Clique para definir as informações deste card',
            creationDate: new Date(),
            type: type,
            difficult: 0
        }
        console.log('até aí de boa');
        console.log(data);
        data.newCard(newCard);
    };

    return (
        <button className="ui labeled icon inverted fluid blue button" onClick={() => addCard(data.name, data.type)}>
            <i className="icon plus"></i>
            Adicionar Card
            </button>
    );
}

export default AddCard;