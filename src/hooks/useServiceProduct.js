import { create } from "zustand"
import useFakeDB from "./useFakeDB"

const useServiceProduct = create((set) => ({

    inventory: [],
    listInventory: () => {

        let data = [
            {
                id: '89',
                name: "Lavado 1 787 897"
            },
            {
                id: '2',
                name: "Lavado 2"
            },
            {
                id: '698429',
                name: "Lavado 3"
            },
        ]
        set((state) => ({ inventory: data }))
    }

}))

export default useServiceProduct