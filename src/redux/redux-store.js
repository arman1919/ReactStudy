import { configureStore,combineReducers } from '@reduxjs/toolkit'
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    sidebar: sidebarReducer
})

let store = configureStore({ reducer: reducers });

window.store = store;

export default store;