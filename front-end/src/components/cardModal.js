import React, { forwardRef, useState, useImperativeHandle } from 'react';
import { Button, Modal, Form, Input, TextArea, Select } from 'semantic-ui-react'
import CardColors from '../models/cardColor.js'

const CardModal = forwardRef((props, refModal) => {

    const [open, setOpen] = useState(false);
    const [card, setCard] = useState(props.card);

    const confirm = () => {
        props.alterCard(card);
        closeModal();
    }

    const deleteCard = () => {
        props.deleteCard(card.key);
        closeModal();
    }

    const handleInputChange = (event) => {
        setCard({ ...card, [event.target.name]: event.target.value });
    }

    const handleSelectChange = (event, { value, name }) => {
        setCard({ ...card, [name]: value });
    }

    const closeModal = () => {
        setOpen(false);
    };

    useImperativeHandle(refModal, () => ({
        showModal() {
            if (!open) {
                setOpen(true);
            }
        }
    }));

    return (
        <Modal open={open}
            closeOnEscape={false}
            closeOnDimmerClick={false}>
            <Modal.Header>Update Card</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <Form>
                        <Form.Group widths='equal'>
                            <Form.Field
                                id='form-input-control-first-name'
                                control={Input}
                                label='Title'
                                placeholder='Title'
                                value={card.title}
                                onChange={handleInputChange}
                                name='title'
                            />
                            <Form.Field
                                control={Select}
                                options={CardColors}
                                label='Color'
                                placeholder='Color'
                                value={card.color}
                                onChange={handleSelectChange}
                                name='color'
                            />
                        </Form.Group>
                        <Form.Field
                            id='form-textarea-control-opinion'
                            control={TextArea}
                            label='Description'
                            placeholder='Description'
                            value={card.description}
                            onChange={handleInputChange}
                            name='description'
                        />
                    </Form>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions >
                <Button negative floated='left' onClick={() => deleteCard()}>Excluir</Button>
                <Button onClick={() => closeModal()}>Cancelar</Button>
                <Button positive onClick={() => confirm()}>Salvar</Button>
            </Modal.Actions>
        </Modal >
    );
});
export default CardModal;