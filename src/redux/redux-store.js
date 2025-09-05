import { configureStore,combineReducers } from '@reduxjs/toolkit'
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    sidebar: sidebarReducer
})

const store = configureStore({ reducer: reducers });

export default store;