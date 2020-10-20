import React,{createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

//Initaial State
const initialState = {
    users: [
        {id:1, name: 'JohnRomil'},
        {id:2, name: 'Christine'},
        {id:3, name: 'Jireh '},
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const[state, dispatch] =useReducer(AppReducer, initialState);

    //function to remove
    const removeUser = (id) =>{
        dispatch({
            type: 'REMOVE_USER',
            payload: id
        })
    }
    //function to add
    const addUser = (user) =>{
        dispatch({
            type: 'ADD_USER',
            payload: user 
        })
    }
    const editUser = (user) =>
    dispatchEvent({
        type:'EDIT_USER',
        payload: user
    })


    return(
        <GlobalContext.Provider value={{
            users:state.users,
            removeUser,
            addUser,
            editUser
        }}>
            {children}
            </GlobalContext.Provider>
    )
}