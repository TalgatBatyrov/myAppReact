import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.css';

const DialogItem = (props) => {
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <img src="https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png" alt="ava" />
            <NavLink to={`/dialogs/${props.id}`} activeClassName={s.activeLink}>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;