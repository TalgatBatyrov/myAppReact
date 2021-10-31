import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../Redux/dialogsReducer';

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = props.dialogsPage.messages.map((message) => <Message message={message.message} />);

    let onMessageClick = () => {
        props.addMessage();
    }

    let onNewMessageChange = (e) => {
        let message = e.target.value;
        props.updateNewMessageText(message); // Вместо Ref использовал target.value
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
                        <textarea value={props.dialogsPage.newMessageText} onChange={onNewMessageChange} placeholder='Enter your message'></textarea>
                    </div>
                    <div className="buttonMessages">
                        <button onClick={onMessageClick}>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;