import React, { forwardRef, useState, useRef, useImperativeHandle } from 'react';
import { Button, Header, Modal } from 'semantic-ui-react'
const CardModal = forwardRef((props, refModal) => {
    const confirm = (modal) => {
        let newCard = props.card;
        console.log(newCard)
        // alterCard(newCard);
        closeModal();
    }

    const closeModal = () => {
        setOpen(false);
    };

    const [open, setOpen] = useState(false);
    // const refModal = useRef();

    useImperativeHandle(refModal, () => ({
        changeState() {
            setOpen(!open);
        }
    }));

    return !open ? (<div></div>) : (
        <Modal open={open}
            onClose={() => closeModal()}
            closeOnEscape={true} >
            <Modal.Header>Update Card</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <Header>Default Profile Image</Header>
                    <p>We've found the following gravatar image associated with your e-mail address.</p>
                    <p>Is it okay to use this photo?</p>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions >
                <Button negative onClick={() => closeModal()}>Cancelar</Button>
                <Button positive onClick={() => confirm()}>Salvar</Button>
            </Modal.Actions>
        </Modal >
    );
});
export default CardModal;