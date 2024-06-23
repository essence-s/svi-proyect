'use client'
// import { useState } from "react"
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export let useSalesCart = create(
    persist(
        (set, get) => ({

            salesCart: [],
            addToCart: (data) => {
                let vm = get().salesCart.map(sales => sales.id)

                data.id = Math.max(...vm) < 1 ? 1 : Math.max(...vm) + 1
                set((state) => ({ salesCart: [...state.salesCart, data] }))
            },
            removeFromCart: (id) => {
                set((state) => ({ salesCart: state.salesCart.filter(sales => sales.id != id) }))
            },
            updateCart: (id, data) => {
                set((state) => ({ salesCart: state.salesCart.map(sales => sales.id == id ? { ...sales, ...data } : sales) }))
            },
            findById: (id) => {
                return get().salesCart.find(sales => sales.id == id)
            }

        }),
        {
            name: 'saleCart',
            skipHydration: true
        }
    )
)

// export default function useSalesCart() {

//     let [salesCart, setSalesCart] = useState([])

//     const addToCart = (data) => {
//         let vm = salesCart.map(sales => sales.id)

//         data.id = Math.max(...vm) < 1 ? 1 : Math.max(...vm) + 1
//         setSalesCart((cart) => [...cart, data])

//     }

//     const removeFromCart = (id) => {
//         setSalesCart(salesCart.filter(sales => sales.id != id))
//     }

//     const updateCart = (id, data) => {
//         setSalesCart(
//             salesCart.map(sales => sales.id == id ? { ...sales, ...data } : sales)
//         )
//     }
//     const findById = (id) => {
//         return salesCart.find(sales => sales.id == id)
//     }

//     return {
//         salesCart,
//         addToCart,
//         removeFromCart,
//         updateCart,
//         findById
//     }
// }