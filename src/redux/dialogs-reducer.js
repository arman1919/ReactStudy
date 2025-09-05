const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Jim" },
    { id: 4, name: "Alex" },
    { id: 5, name: "Bob" },
    { id: 6, name: "Charlie" },
    { id: 7, name: "David" },
    { id: 8, name: "Ethan" },
    { id: 9, name: "Frank" },
    { id: 10, name: "George" },
    { id: 11, name: "Hannah" },
  ],
  messages: [
    { id: 1, message: "Hello" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "I'm fine, thank you!" },
    { id: 4, message: "What are you doing?" },
    { id: 5, message: "I'm doing nothing." },
  ],
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      return {
        ...state,
        newMessageBody: action.body, // ✅ новый объект
      };
    }

    case SEND_MESSAGE: {
      let body = state.newMessageBody;
      if (body.trim() === "") return state; // не добавляем пустые сообщения

      return {
        ...state,
        newMessageBody: "",
        messages: [
          ...state.messages,
          { id: state.messages.length + 1, message: body },
        ], // ✅ новый массив
      };
    }

    default:
      return state;
  }
};

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body,
});
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export default dialogsReducer;
