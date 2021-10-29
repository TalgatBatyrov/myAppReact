const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                { message: 'HI', likesCount: 10, id: 1 },
                { message: 'HEY', likesCount: 15, id: 2 },
            ],
            newPostText: 'Hi howe are you?'
        },
        dialogsPage: {
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
        }
    },
    _callSubscriber() {
        console.log('state changed');
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                message: this._state.profilePage.newPostText,
                likesCount: 100, id: 2
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                message: this._state.dialogsPage.newMessageText,
                id: 4
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newMes;
            this._callSubscriber(this._state)
        }
    }
}

export let addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export let updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export let addMessageActionCreator = () => {
    return {
        type: 'ADD-MESSAGE'
    }
}

export let updateNewMessageTextActionCreator = (message) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newMes: message
    }
}

export default store;