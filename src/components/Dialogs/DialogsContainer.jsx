import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../Redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

// const DialogsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let onMessageClick = () => {
//                         store.dispatch(addMessageActionCreator())
//                     }

//                     let onNewMessageChange = (message) => {
//                         store.dispatch(updateNewMessageTextActionCreator(message))
//                     }

//                     return (
//                         <Dialogs updateNewMessageText={onNewMessageChange}
//                             addMessage={onMessageClick}
//                             dialogsPage={store.getState().dialogsPage} />
//                     )
//                 }
//             }

//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (message) => {
            dispatch(updateNewMessageTextActionCreator(message))
        },
        addMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;