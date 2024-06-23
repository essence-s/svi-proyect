import { UserContext } from "@/context/UserContext"
import { useContext } from "react"

export default function useUser() {

    let { user } = useContext(UserContext)

    const getUser = () => {
        return user
    }

    return {
        getUser
    }
}