const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let store = {
    _state: {
        dialogPage: {
            dialogs: [
                {id: 1, name: "John"},
                {id: 2, name: "Jane"},
                {id: 3, name: "Jim"},
                {id: 4, name: "Alex"},
                {id: 5, name: "Bob"},
                {id: 6, name: "Charlie"},
                {id: 7, name: "David"},
                {id: 8, name: "Ethan"},
                {id: 9, name: "Frank"},
                {id: 10, name: "George"},
                {id: 11, name: "Hannah"},
            ],
            messages: [
                {id: 1, message: "Hello"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "I'm fine, thank you!"},
                {id: 4, message: "What are you doing?"},
                {id: 5, message: "I'm doing nothing."},
            ],
            newMessageBody: "",
        },
        profilePage: {
            posts: [
                {id: 1, message: "Hello", likesCount: 10},
                {id: 2, message: "How are you?", likesCount: 45},
            ],
            newPostText: "test post text",
        },
    },
    _callSubscriber (state)  {
        console.log("State changed", state);
    },



    subscribe (observer) {
        this._callSubscriber = observer;
    },

    getState () {
        return this._state;
    },

    dispatch (action) { // {type: "ADD-POST"}
        if (action.type === ADD_POST) {
            let newPost = {
                id: this._state.profilePage.posts.length + 1,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            }
            let newState = {
                ...this._state,
                profilePage: {
                    ...this._state.profilePage,
                    posts: [...this._state.profilePage.posts, newPost],
                    newPostText: ''
                }
            };
            this._state = newState;
            this._callSubscriber(this._state);
        }else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state = {
                ...this._state,
                profilePage: {
                    ...this._state.profilePage,
                    newPostText: action.newText
                }
            };
            this._callSubscriber(this._state);
        }else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        }else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogPage.newMessageBody;
            this._state.dialogPage.newMessageBody = "";
            this._state.dialogPage.messages.push({id: this._state.dialogPage.messages.length + 1, message: body});
            this._callSubscriber(this._state);

        }
    }
    
}

window.state = store;
export default store;

const addPostActionCreator = () => ({type: ADD_POST})
const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})
const sendMessageCreator = () => ({type: SEND_MESSAGE})

export {addPostActionCreator, updateNewPostTextActionCreator, updateNewMessageBodyCreator, sendMessageCreator}