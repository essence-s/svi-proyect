// import { insertClientService, listClientService } from "@/services/clientServices"
import { useContext, useState } from "react"

import useFakeDB from "./useFakeDB"
import { UserContext } from "@/context/UserContext"

export default function useClient() {

    let { listClientsService, insertClientsService } = useFakeDB()

    let { clients, setClients } = useContext(UserContext)
    // let [clients, setClients] = useState([])

    const listClients = () => {
        listClientsService().then(data => {
            setClients(data)
        })

    }

    const insertClients = (data) => {
        insertClientsService(data)
        listClients()
    }

    return {
        clients,
        listClients,
        insertClients
    }
}