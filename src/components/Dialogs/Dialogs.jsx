import s from './Dialogs.module.css';
import DialogItem from './Dialog/DialogItem';
import Message from './Message/Message';

const Dialogs = () => {
    let dialog = [
        { name: 'Dimych', id: 1 },
        { name: 'Andrey', id: 2 },
        { name: 'Sveta', id: 3 },
        { name: 'Sasha', id: 4 },
        { name: 'Victor', id: 5 },
        { name: 'Valera', id: 6 },
    ]
    let message = [
        { message: 'Hi', id: 1 },
        { message: 'How is your IT-Kamasutra', id: 2 },
        { message: 'Yo', id: 3 },
    ]


    let dialogsElements = dialog.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />);


    let messagesElements = message.map((message) => <Message message={message.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}
export default Dialogs;