import React, { useRef } from 'react';
import { useDrag } from 'react-dnd'
import CardModal from './cardModal.js'

const Card = ({ card, alterCard, deleteCard, columns }) => {

    // eslint-disable-next-line
    const [isDragging, drag] = useDrag({
        item: { id: card, type: 'card' },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult()
            if (item && dropResult) {
                item.id.type = dropResult.name;
                alterCard(item.id);
            }
        },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const getColumnSelect = () => {
        let columnsSelect = [];
        for (let index = 0; index < columns.length; index++) {
            const element = columns[index];
            columnsSelect.push({ text: element.name, value: element.type })
        }
        return columnsSelect;
    };

    const refModal = useRef();
    return (
        <div ref={drag} className={'ui fluid card hand-cursor ' + card.color} onClick={() => refModal.current.showModal()}>
            <div className="content">
                <div className="header">{card.title}</div>
                <div className="description">{card.description}</div>
            </div>
            <CardModal ref={refModal} card={card} getColumnSelect={getColumnSelect()} alterCard={(card) => alterCard(card)} deleteCard={(key) => deleteCard(key)}></CardModal>
        </div>
    );
}

export default Card;