import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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

    dispatch (action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
    
}

window.store = store;
export default store;
