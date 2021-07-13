import { createContext, useState, useContext } from "react";

const InfoContext = createContext()


function InfoProvider ({children}) {

    const [login, setLogin] = useState(window.localStorage.getItem('user_id') || false)
    const [role, setRole] = useState(false)
    const [username, setUsername] = useState(window.localStorage.getItem('username') || '')
    const [userId, setUserId] = useState(window.localStorage.getItem('user_id'))
    const [admin, setAdmin] = useState(false)
    const [urlServer, setUrlServer] = useState('https://eustoz.herokuapp.com')

    const value = {
        login, 
        setLogin,
        role,
        setRole,
        username, 
        setUsername,
        userId, 
        setUserId,
        admin,
        setAdmin,
        urlServer,
        setUrlServer
    }

    return (
        <InfoContext.Provider value={value}>
            <InfoContext.Consumer>
                {() => children}
            </InfoContext.Consumer>
        </InfoContext.Provider>
    )
}


function useInfo () {
    const {login, setLogin, role, setRole, username, setUsername,userId, setUserId, admin, setAdmin, urlServer, setUrlServer} = useContext(InfoContext)

    return [login, setLogin, role, setRole, username, setUsername,userId, setUserId, admin, setAdmin, urlServer, setUrlServer]
}

export {
    InfoProvider,
    useInfo
}