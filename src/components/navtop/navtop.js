import { useEffect, useState } from 'react'
import './navtop.css'
import Link from 'next/link';
import { Bell, IconLogout, Inbox, Menu } from '../Icons/index'
import { SwitchTheme } from '../switch-theme/switch-theme';

export default function Navtop(props) {


    const history = props.datNotinn
    let [isOpened, setOpened] = useState(false)

    const openModal = (t) => {
        setOpened(true)
    }
    const closeModal = () => setOpened(false)


    let [arraynuevinNoti, setarraynuevinNoti] = useState([])


    let [variDA, setvariDA] = useState(false)
    const viewNotificacion = () => {
        setvariDA(!variDA)
    }

    return (
        <>
            <div className="navtop">
                <div className="navtop__section">
                    <div className="navtop__user-img">
                        <img src='/user2.png'></img>
                    </div>
                    <div className="navtop__content-data-user">
                        <div className="navtop__user-name">ISOSELES</div>
                        <div className="navtop__user-description">Vendedor</div>
                    </div>
                </div>
                <div className="navtop__section">

                    <SwitchTheme
                        style={{
                            marginRight: '10px', background: 'var(--secondary-color)', color: 'var(--text-secondary)',
                            border: 'dashed 1px var(--text-secondary)'
                        }}
                    ></SwitchTheme>
                    <div className="navtop__icon">
                        <Inbox></Inbox></div>
                    <div className="navtop__icon">
                        <Bell></Bell>
                    </div>
                    <div className="navtop__icon">
                        <IconLogout></IconLogout>
                    </div>
                </div>
            </div>

            {/* <div className="navTop">

                <div className="conteIconMenu">

                    <Menu></Menu>
                    <div className='coteIconoMenuMovil'>
                        main menu
                    </div>

                </div>



                <div className="grupNoti">
                    <div className='nombreUsuario'>

                    </div>

                    <div style={{ position: 'relative' }}>
                        <div className='centrarHV' onClick={viewNotificacion}>

                            <Inbox></Inbox>
                        </div>
                        <div style={{ height: variDA ? '200px' : '0px' }} className='contenidoNotificion'>
                            <div className='despNotifi'>
                                <div className='titulo'>Alerta de Stock </div>
                                {arraynuevinNoti.map((r, i) => {
                                    return (
                                        <div key={r.name + i} className='conteData'>
                                            <div>{r.name}</div>
                                            <div>STOCK {r.stock}</div>

                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='centrarHV'>

                        <Bell></Bell>
                    </div>
                    {

                        <Link href='/Login'>
                            <IconLogout></IconLogout>
                        </Link>
                    }


                </div>

            </div> */}

        </>
    )
}

