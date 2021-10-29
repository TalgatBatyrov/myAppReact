import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../Redux/state';

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = props.state.messages.map((message) => <Message message={message.message} />);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    let onMessageChange = () => {
        let message = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(message))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.textareaMessages}>
                    <textarea ref={newMessageElement} value={props.state.newMessageText} onChange={onMessageChange}></textarea>
                </div>
                <div className="buttonMessages">
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;