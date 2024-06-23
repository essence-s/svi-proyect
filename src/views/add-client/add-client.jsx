'use client'
import { useEffect, useState } from "react"
import './add-client.css'
import { Identification, Phone } from "@/components/Icons"
import useClient from "@/hooks/useClient"
import DynamicTable from "@/components/dynamic-table/dynamic-table"

export default function AddClient() {

    let { clients, listClients, insertClients } = useClient()

    let [statusEdit, setStatusEdit] = useState(false)

    let [name, setName] = useState('')
    let [dni, setDNI] = useState('')
    let [phone, setPhone] = useState('')

    const handleAddOrUpdateToCart = (e) => {
        e.preventDefault()

        insertClients({ name, dni, phone })


        console.log('ol')
    }

    const handleRemoveFromCart = (id) => {

    }

    const updateFormFieldsWithData = (id) => {

    }

    useEffect(() => {
        // setTimeout(() => {
        listClients()
        // }, 5000)
    }, [])

    return (
        <>
            <div className="add-client">

                <div className="add-client__section">

                    <form action="" className="basic-form" onSubmit={handleAddOrUpdateToCart}>
                        <div className="basic-form__title">Registrar Cliente</div>
                        <div className="basic-form__group">
                            {/* {salesId} */}


                            <div className="basic-form__input-wrapper">
                                <label>
                                    <span>Name</span>
                                    <input value={name} onChange={(e) => setName(e.target.value)}></input>
                                </label>

                            </div>

                            <div className="basic-form__input-wrapper">
                                <label>
                                    <span>DNI</span>
                                    <input value={dni} onChange={(e) => setDNI(e.target.value)}></input>
                                </label>
                            </div>

                            <div className="basic-form__input-wrapper">
                                <label>
                                    <span>Phone</span>
                                    <input value={phone} onChange={(e) => setPhone(e.target.value)}></input>
                                </label>

                            </div>

                            {/* <div className="add-client__inputs-data-wrapper">

                            </div> */}

                            <button>
                                {statusEdit == false ? "AGREGAR" : "ACTUALIZAR"}
                            </button>
                        </div>
                    </form>

                </div>

                <div className="add-client__section">
                    <DynamicTable
                        // data={salesCart}
                        conf={["id", "Producto", "Cantidad", "Precio", "Opciones"]}
                    // handleEdit={updateFormFieldsWithData}
                    // handleDelete={handleRemoveFromCart}
                    ></DynamicTable>

                    <div className="box-data-users">

                        {clients.map((client) => {
                            return <div className="box-data-users__card" key={client.id}>
                                <div className="box-data-users__img-user"></div>
                                <div className="box-data-users__name">{client.name}</div>
                                <div className="box-data-users__dni"><Identification></Identification> {client.dni}</div>
                                <div className="box-data-users__phone"><Phone></Phone> {client.phone}</div>
                            </div>
                        })}

                    </div>

                </div>

            </div>
        </>
    )
}