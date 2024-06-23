import { useState } from "react"

export default function useSale() {

    let [sales, setSales] = useState([])

    const listSales = () => {

    }

    const insertSale = (data) => {
        console.log(data)
    }

    const deleteSale = () => {

    }

    return {
        listSales,
        insertSale
    }
}