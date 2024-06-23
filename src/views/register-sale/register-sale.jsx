'use client'
import { useEffect, useState } from 'react'
import './register-sale.css'
import { useSalesCart } from '@/hooks/useSalesCart'

import { DocumentPlus, Identification, NewsPaper, UserPlus } from '@/components/Icons'
import Modal from '@/components/modal/modal'
import useClient from '@/hooks/useClient'
import AddClient from '../add-client/add-client'
import useSale from '@/hooks/useSale'
import useUser from '@/hooks/useUser'
import { invoke } from '@tauri-apps/api/tauri'
import DynamicTable from '@/components/dynamic-table/dynamic-table'
// import Select from 'react-select'
import CustomSelect from '@/components/custom-select/custom-select'
import useServiceProduct from '@/hooks/useServiceProduct'

export default function RegisterSale() {

    let options = [
        { value: "Lavado 1 787 897", label: "Lavado 1 787 897" },
        { value: "Gaseosa coca cola", label: "Gaseosa coca cola" },
        { value: "Lavado 1 787 897", label: "Lavado 1 787 897" },
        { value: "Gaseosa coca cola", label: "Gaseosa coca cola" },
        { value: "Lavado 1 787 897", label: "Lavado 1 787 897" },
        { value: "Gaseosa coca cola", label: "Gaseosa coca cola" },
        { value: "Lavado 1 787 897", label: "Lavado 1 787 897" },
    ]



    // CUSTOM HOOKS
    let { salesCart, addToCart, removeFromCart, updateCart, findById } = useSalesCart()
    let { clients, listClients } = useClient()
    let { inventory, listInventory } = useServiceProduct()
    let { insertSale } = useSale()
    let { getUser } = useUser()


    let [statusEdit, setStatusEdit] = useState(false)
    let [salesId, setSalesID] = useState('')
    let [product, setProduct] = useState({})
    let [quantity, setQuantity] = useState(1)
    let [priceUni, setPriceUni] = useState(200)
    let [price, setPrice] = useState(0)




    // MODAL ADD CLIENT FAST
    let [modalAddClientFast, setModalAddClientFast] = useState(false)
    const closeModalAddClientFast = () => setModalAddClientFast(false)
    const openModalAddClientFast = () => setModalAddClientFast(true)

    // MODAL
    let [modal, setModal] = useState(false)
    const closeModal = () => setModal(false)
    const openModal = () => setModal(true)

    // let idClient
    // let idVende
    // let time
    let [inputClient, setInputClient] = useState({})

    const handleRegisterSale = () => {
        let totalSale = salesCart.reduce((ant, ac) => ant + ac.price, 0)
        let user = getUser()
        insertSale({
            idClient: inputClient.value,
            idSeller: user,
            total: totalSale,
            items: salesCart
        })

        // invoke('insertsql')
        // window.print();
    }


    const handleAddOrUpdateToCart = (e) => {
        e.preventDefault()

        if (statusEdit) {
            updateCart(salesId, { product, quantity, price })
            setStatusEdit(false)
        } else {
            addToCart({ product, quantity, price })
        }
    }

    const handleRemoveFromCart = (id) => {
        removeFromCart(id)
    }

    const updateFormFieldsWithData = (id) => {

        let foundObject = findById(id)
        setStatusEdit(true)
        // console.log(foundObject)
        setSalesID(foundObject.id)
        setProduct(foundObject.product)
        setQuantity(foundObject.quantity)
        setPrice(foundObject.price)
    }

    useEffect(() => {
        listClients()
        listInventory()
        useSalesCart.persist.rehydrate();

    }, [])

    useEffect(() => {


        setInputClient({ value: clients[0]?.id, label: clients[0]?.name })
        console.log(clients)

    }, [clients])

    useEffect(() => {
        setPrice(priceUni * quantity)
    }, [quantity])

    return (
        <>
            <div className="register-sale">

                <Modal modal={modalAddClientFast} closeModal={closeModalAddClientFast}>
                    {/* {JSON.stringify(clients)}
                    {inputClient} */}
                    <AddClient></AddClient>
                </Modal>

                <Modal modal={modal} closeModal={closeModal}>
                    holiii
                </Modal>

                {/* <Modal modal={true} closeModal={closeModal}>
                    hgolaaa
                </Modal> */}

                <div className="register-sale__sect-1">
                    <form action="" className="basic-form" onSubmit={handleAddOrUpdateToCart}>
                        <div className="basic-form__title">Vender</div>
                        <div className="basic-form__group">
                            {/* {salesId} */}
                            <div className="basic-form__input-wrapper">
                                <label htmlFor="">
                                    <span>Servicios o Productos</span>
                                    <CustomSelect
                                        instanceId="selectbox"
                                        border={true}
                                        options={inventory.map(s => ({ value: s.id, label: s.name }))}
                                        onChange={setProduct}
                                        value={product}
                                    ></CustomSelect>
                                    {/* <input list="product-data-list" value={product} onChange={(e) => setProduct(e.target.value)}></input> */}

                                </label>
                                {/* <datalist id="product-data-list">
                                    <option value="Lavado 1 787 897 "></option>
                                    <option value="Lavado 2 88946 5454"></option>
                                    <option value="Lavado 3 8466 3 225"></option>
                                    <option value="Gaseosa coca cola"></option>
                                    <option value="Doritos"></option>

                                </datalist> */}
                            </div>

                            <div className="basic-form__inputs-data-wrapper">

                                <label>
                                    <span>Precio Unidad</span>
                                    <input className='dd' type='number' disabled required value={200} ></input>
                                </label>
                                <label>
                                    <span>Stock</span>
                                    <input className='dd' type='number' disabled required value={quantity} onChange={(e) => setQuantity(e.target.value)}></input>
                                </label>
                            </div>

                            <div className="basic-form__inputs-data-wrapper">

                                <label>
                                    <span>Cantidad</span>
                                    <input type='number' required value={quantity} onChange={(e) => setQuantity(e.target.value)}></input>
                                </label>
                                <label>
                                    <span>Precio.u x Cant</span>
                                    <input className='dd' type='number' disabled required value={price} onChange={(e) => setPrice(e.target.value)}></input>
                                </label>
                            </div>

                            <button>
                                {statusEdit == false ? "AGREGAR" : "ACTUALIZAR"}
                            </button>
                        </div>
                    </form>


                    <div className="register-sale__select-client">
                        {/* <button>Registrar Venta</button> */}

                        <div className="register-sale__select-wrapper-client">
                            <span><Identification></Identification></span>
                            <label>
                                <CustomSelect
                                    instanceId="selectbox2"
                                    options={clients.map((client) => ({ value: client.id, label: client.name }))}
                                    onChange={(dataC) => setInputClient(dataC)}
                                    value={inputClient}
                                ></CustomSelect>
                            </label>
                        </div>

                        <div className="register-sale__action-sale" onClick={openModalAddClientFast}><UserPlus></UserPlus></div>
                        {/* <div className="register-sale__action-sale"><DocumentPlus></DocumentPlus></div> */}

                        {/* <div className="register-sale__price-total"><span>Precio Total : </span>$ {salesCart.reduce((ant, ac) => { return { price: ant.price + ac.price } }, { price: 0 }).price}</div> */}
                    </div>
                </div>

                <div className="register-sale__sect-2">
                    <DynamicTable
                        data={salesCart.map(saleCart => ({ ...saleCart, product: saleCart.product.label }))}
                        conf={["id", "Producto", "Cantidad", "Precio", "Opciones"]}
                        handleEdit={updateFormFieldsWithData}
                        handleDelete={handleRemoveFromCart}
                    ></DynamicTable>

                    <div className="register-sale__send">
                        <div className="register-sale__price-total"><span>Precio Total : </span>$ {salesCart.reduce((ant, ac) => ant + ac.price, 0)}</div>

                        <div className="register-sale__wrapper-actions-sale">
                            {/* <div className="register-sale__action-sale"><Identification></Identification></div> */}
                            <div className="register-sale__action-sale"><NewsPaper></NewsPaper></div>
                            <div className="register-sale__action-sale" onClick={openModal}><DocumentPlus></DocumentPlus></div>
                        </div>
                        <button onClick={handleRegisterSale}>Registrar Venta</button>
                    </div>
                </div>
            </div>
        </>
    )
}