const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        { name: 'Dimych', id: 1 },
        { name: 'Andrey', id: 2 },
        { name: 'Sveta', id: 3 },
        { name: 'Sasha', id: 4 },
        { name: 'Victor', id: 5 },
        { name: 'Valera', id: 6 },
    ],
    messages: [
        { message: 'Hi', id: 1 },
        { message: 'How is your IT-Kamasutra', id: 2 },
        { message: 'Yo', id: 3 },
    ],
    newMessageText: 'Wellcome'
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                message: state.newMessageText,
                id: 4
            };
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, newMessage]
            }
            // stateCopy.messages.push(newMessage);  вместо push просто в конец после запятой вынесли newMessage
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newMessage
            }
        }
        default:
            return state
    }
}

export let addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export let updateNewMessageTextActionCreator = (message) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessage: message
    }
}


export default dialogsReducer;