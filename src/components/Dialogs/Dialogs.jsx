import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../Redux/state';

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = props.state.messages.map((message) => <Message message={message.message} />);


    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    let onNewMessageChange = (e) => {
        let message = e.target.value; // Вместо Ref использовал target.value
        props.dispatch(updateNewMessageTextActionCreator(message))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div className={s.textareaMessages}>
                        <textarea value={props.state.newMessageText} onChange={onNewMessageChange} placeholder='Enter your message'></textarea>
                    </div>
                    <div className="buttonMessages">
                        <button onClick={addMessage}>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;