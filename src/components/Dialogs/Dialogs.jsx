import s from './Dialogs.module.css';
import DialogItem from './Dialog/DialogItem';
import Message from './Message/Message';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Dimych' id='1' />
                <DialogItem name='Andrey' id='2' />
                <DialogItem name='Sveta' id='3' />
                <DialogItem name='Sasha' id='4' />
                <DialogItem name='Victor' id='5' />
                <DialogItem name='Valera' id='6' />
            </div>
            <div className={s.messages}>
                <Message message='Hi' />
                <Message message='How is your IT-Kamasutra' />
                <Message message='Yo' />
            </div>
        </div>
    )
}
export default Dialogs;