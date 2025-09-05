const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Hello", likesCount: 10 },
    { id: 2, message: "How are you?", likesCount: 45 },
    { id: 3, message: "I'm fine, thank you!", likesCount: 12 },
    { id: 4, message: "What are you doing?", likesCount: 23 },
    { id: 5, message: "I'm doing nothing.", likesCount: 56 },
  ],
  newPostText: "test post text",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: state.posts.length + 1,
        message: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost], // ✅ новый массив
        newPostText: "", // ✅ новое значение
      };
    }

    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText, // ✅ новый объект
      };
    }

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
