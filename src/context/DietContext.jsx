import {createContext, useContext, useState} from 'react'

const DietContext = createContext();

export const DietProvider = ({children}) =>{
    const [idUser, setIdUser] = useState('')

    const [token, setToken] = useState('');

    const getUserId = (id)=>{
        setIdUser(id);
    }

    const loginToken = (vToken) =>{
        setToken(vToken)
    }

    const logoutToken = () =>{
        setToken('')
    }

    return(
        <DietContext.Provider value={{token, loginToken, logoutToken, idUser, getUserId }}>
            {children}
        </DietContext.Provider>
    )
}

export const useDiet = () => useContext(DietContext)