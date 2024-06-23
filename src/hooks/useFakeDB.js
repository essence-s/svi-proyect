const { FakeDBContext } = require("@/context/fakeDBContext");
const { useContext } = require("react");

export default function useFakeDB() {

    let { clientDB, setClientDB } = useContext(FakeDBContext)


    const listClientsService = () => {

        return new Promise((resolve) => {
            setTimeout(() => {
                setClientDB(prevd => {
                    resolve(prevd);
                    return prevd
                })
            }, 1000)
        })
    }
    const insertClientsService = (data) => {
        let vm = clientDB.map(sales => sales.id)

        data.id = Math.max(...vm) < 1 ? 1 : Math.max(...vm) + 1
        setClientDB((cart) => [...cart, data])

    }

    const remove = (id) => {
        setClientDB(clientDB.filter(sales => sales.id != id))
    }

    const update = (id, data) => {
        setClientDB(
            clientDB.map(sales => sales.id == id ? { ...sales, ...data } : sales)
        )
    }
    const findById = (id) => {
        return clientDB.find(sales => sales.id == id)
    }

    return {
        listClientsService,
        insertClientsService,
        remove,
        update,
        findById
    }
}