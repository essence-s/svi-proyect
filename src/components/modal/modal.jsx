import { useEffect, useState } from 'react'
import './modal.css'
import { XCircle } from '../Icons'
import ReactDOM from "react-dom"

export default function Modal({ modal, closeModal, children }) {
    // let [anim, setanim] = useState(false)

    let [status, setstatus] = useState(false)
    // useEffect(() => {

    //     setTimeout(() => {
    //         setanim(true)
    //     }, 2000)
    //     setTimeout(() => {
    //         setanim(false)
    //     }, 5000)

    //     setTimeout(() => {
    //         setanim(true)
    //     }, 8000)
    // }, [])

    // useEffect(() => {
    //     if (!modal) {
    //         setTimeout(() => {
    //             setstatusanim(true)
    //         }, 1000)
    //     } else {
    //         // setTimeout(() => {
    //         setstatusanim(false)
    //         // }, 1000)
    //     }

    // }, [modal])

    useEffect(() => {
        setstatus(true)

    }, [])
    const modalRo = (
        <div className={`background-modal ${modal ? 'anim2' : 'anim2rev'} `} >
            <div className="back-modal" onClick={() => closeModal()}></div>
            <div className={`modal ${modal ? 'anim' : 'animrev'}`}>
                {children}
                <div className="modal_close" onClick={() => closeModal()}><XCircle className='w-7 h-7'></XCircle></div>
            </div>
        </div>
    )

    if (status) return ReactDOM.createPortal(modalRo, document.getElementById("modal-root"))
}