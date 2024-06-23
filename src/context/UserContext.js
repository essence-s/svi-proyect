'use client'
import { createContext, useState } from "react"

const UserContext = createContext([])

function UserContextProvider({ children }) {
    let [clients, setClients] = useState([])

    let [user, setUser] = useState("Isoseles")

    return (
        <UserContext.Provider value={
            {
                clients, setClients,
                user
            }
        }>{children}</UserContext.Provider>
    )
}

export { UserContext, UserContextProvider }


