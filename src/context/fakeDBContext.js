'use client'
const { createContext, useState } = require("react");

const FakeDBContext = createContext([])

function FakeDBContextProvider({ children }) {

    let [clientDB, setClientDB] = useState([
        { id: 1, name: 'Bruss', phone: '9446587899', dni: '848446' },
        { id: 2, name: 'Hernesto', phone: '986164686', dni: '446956' },
        { id: 3, name: 'Andres', phone: '996932158', dni: '466355' }
    ])



    return <FakeDBContext.Provider value={
        {
            clientDB, setClientDB,
        }
    }>{children}</FakeDBContext.Provider>
}

export { FakeDBContext, FakeDBContextProvider }