import { rerenderIntireTree } from "../render";

let state = {
    profilePage: {
        posts: [
            { message: 'HI', likesCount: 10, id: 1 },
            { message: 'HEY', likesCount: 15, id: 2 },
        ]
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
    }
}

export let addPost = (postMessage) => {
    let newPost = { message: postMessage, likesCount: 100, id: 2 };

    state.profilePage.posts.push(newPost);
    rerenderIntireTree(state)
}


export default state;