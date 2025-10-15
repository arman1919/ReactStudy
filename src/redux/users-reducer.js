
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'


let initialState = {
  users: [
    { id: 1, followed: false, name: "Dmitry", status: "I'm fine, thank you!", location: {city: "Minsk", country: "Belarus" } },
    { id: 2, followed: true, name: "Max", status: "I'm fine, thank you!", location: {city: "Moscow", country: "Russia" } },
    { id: 3, followed: false, name: "Ivan", status: "I'm fine, thank you!", location: {city: "St.Петербург", country: "Russia" } },
    { id: 4, followed: true, name: "Sergey", status: "I'm fine, thank you!", location: {city: "Kazan", country: "Russia" } },
    { id: 5, followed: false, name: "Pavel", status: "I'm fine, thank you!", location: {city: "Novosibirsk", country: "Russia" } },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      let stateCopy = {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
      return stateCopy
    
    case UNFOLLOW:
      let stateCopy2 = {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
      return stateCopy2
    
    case SET_USERS:
      return {...state, users: [...state.users, ...action.users]}

    default:
      return state;
  }
};

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;
