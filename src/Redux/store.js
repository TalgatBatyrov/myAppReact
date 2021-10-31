import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sideBarReducer from "./sideBarReducer";

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
        },
        sideBarPage: {
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBarPage = sideBarReducer(this._state.sideBarPage, action);
        this._callSubscriber(this._state)
    }
}

export default store;