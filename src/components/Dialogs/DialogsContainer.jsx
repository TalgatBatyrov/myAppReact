import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../Redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let onMessageClick = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    let onNewMessageChange = (message) => {
        props.store.dispatch(updateNewMessageTextActionCreator(message))
    }

    return (
        <Dialogs updateNewMessageText={onNewMessageChange} addMessage={onMessageClick} dialogsPage={state} />
    )
}
export default DialogsContainer;