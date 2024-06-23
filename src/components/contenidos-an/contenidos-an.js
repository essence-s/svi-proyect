'use client'
import './contenidos-an.css'
import Compoaside from '@/components/compoaside/compoaside'
import Navtop from '@/components/navtop/navtop'

export default function ContenidosAN({ children }) {
    return (


        <div className="gridAP">
            <div className="circledash"></div>
            <div className="gridAP1">
                <Compoaside></Compoaside>
            </div>

            <div className="gridAP2">

                <Navtop></Navtop>

                <div className="contenedorNe">
                    {children}
                </div>
            </div>

        </div>




    )
}