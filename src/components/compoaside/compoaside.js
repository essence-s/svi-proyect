'use client'

import logo from './carwash.png';
import './compoaside.css'
import Link from 'next/link';
import { cog, DocumentText, eye, home, shoppingCart, squaresPlus } from '../Icons/index'
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';


function Compoaside() {


    const pathName = usePathname()
    // const pathName = useSearchParams()
    // console.log(pathName)
    // useEffect(() => {
    //     const pattern = /\/([^\/]+)\/?$/;
    //     const result = pathName.match(pattern);
    //     if (result) {
    //         const lastValue = result[1];
    //         console.log(lastValue);
    //     } else {
    //         console.log("No match found.");
    //     }
    //     // console.log(pathName)
    // }, [pathName])



    const opciA = [
        { nombre: 'Existencias', url: '/dashboard/services-products', iconA: 'cubes', color: '#2b2b2b' },
        { nombre: 'Usuarios', url: '/dashboard/add-user', iconA: 'user-circle', color: '#2b2b2b' },
        { nombre: 'Clientes', url: '/dashboard/add-client', iconA: 'cubes', color: '#2b2b2b' },
        { nombre: 'Proveedores', url: '/addProveedores', iconA: 'handshake-o', color: '#2b2b2b' }
    ]
    const opciVer = [
        { nombre: 'Usuarios', url: '/dashboard/users', iconA: 'user-circle', color: '#2b2b2b' },
        { nombre: 'Productos', url: '/dashboard/product', iconA: 'cubes', color: '#2b2b2b' },
        { nombre: 'Proveedores', url: '/dashboard/suppliers', iconA: 'handshake-o', color: '#2b2b2b' },
        // {nombre:'Clientes'}
    ]
    // const opciregistEyS = [
    //     { nombre: 'Vender Productos', url: '/dashboard/register-sale', iconA: 'handshake-o', color: '#2b2b2b' },
    //     { nombre: 'Comprar Existencias', url: '/dashboard/register-purchase', iconA: 'user-circle', color: '#2b2b2b' },
    // ]
    // const cue = [
    //     { nombre: 'Home', url: 'home', iconA: 'home', color: 'white' },

    //     { nombre: 'Ver', url: '', iconA: 'eye', color: 'white', arrayOpci: opciVer },
    //     { nombre: 'Registrar', url: '', iconA: 'shopping-cart', color: 'white', arrayOpci: opciregistEyS },
    //     { nombre: 'Agregar', url: '', iconA: 'plus', color: 'white', arrayOpci: opciA },

    //     { nombre: 'Registros', url: '/registros', iconA: 'file-text-o', color: 'white' },
    //     { nombre: 'Ajustes', url: '', iconA: 'cog', color: 'white' },
    // ]
    const cue = [
        { nombre: 'Home', url: '/dashboard/home', iconA: home, color: 'red' },

        // { nombre: 'Registrar', url: '', iconA: shoppingCart, color: 'white', arrayOpci: opciregistEyS },
        { nombre: 'Vender', url: '/dashboard/register-sale', iconA: shoppingCart, color: 'white', },

        { nombre: 'Registros', url: '/dashboard/transactions', iconA: DocumentText, color: 'white' },

        { nombre: 'Ver', url: '', iconA: eye, color: 'white', arrayOpci: opciVer },
        { nombre: 'Agregar', url: '', iconA: squaresPlus, color: 'white', arrayOpci: opciA },
        { nombre: 'Ajustes', url: '', iconA: cog, color: 'white' },
    ]

    return (
        <div className='compoaside'>
            <aside>
                <h2 className="asideTitle">
                    <img src={logo.src} />
                </h2>
                <ul className="aside">
                    {cue.map(r =>
                        <li key={r.nombre}>

                            <Link href={r.url == '' ? '#' : r.url}  >
                                <div className={`opciAsi ${r.url == pathName ? 'selectOption' : ''}`}>

                                    <div className='composide__icon'>
                                        <r.iconA></r.iconA>
                                    </div>
                                    {r.nombre}

                                </div>
                                <div className="raita"> <span></span></div>
                            </Link>
                            {r.arrayOpci ?
                                <div className="opciul">
                                    <div className='dindinoop'></div>
                                    <ul>
                                        {r.arrayOpci.map(r =>
                                            <li key={r.nombre}>
                                                <Link href={r.url} >
                                                    <div style={{ display: 'flex', alignItems: 'center', padding: '13px' }}>
                                                        <div style={{ width: '15px', marginRight: '10px' }}>
                                                            <i className={"fa fa-" + r.iconA} style={{ color: r.color }}></i>
                                                        </div>
                                                        <div>{r.nombre}</div>
                                                    </div>
                                                </Link>
                                            </li>

                                        )}
                                    </ul>

                                </div> : ''
                            }

                        </li>
                    )}
                </ul>
            </aside>
        </div>
    )
}

export default Compoaside