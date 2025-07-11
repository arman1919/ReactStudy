let renderEntireTree = (state) => {
    
}

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
        },
        profilePage: {
            posts: [
                {id: 1, message: "Hello", likesCount: 10},
                {id: 2, message: "How are you?", likesCount: 45},
            ],
            newPostText: "test post text",
        },
    },
    _renderEntireTree (state)  {
        console.log("State changed");
    },

    addPost (postMessage) {
        let newPost = {
            id: this._state.profilePage.posts.length + 1,
            message: postMessage,
            likesCount: 0,
        }
        this._state.profilePage.posts.push(newPost);
        this._renderEntireTree(this._state);
    },

    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._renderEntireTree(this._state);
    },

    subscribe (observer) {
        this._renderEntireTree = observer;
    },

    getState () {
        return this._state;
    }
    
}

window.state = store;
export default store;