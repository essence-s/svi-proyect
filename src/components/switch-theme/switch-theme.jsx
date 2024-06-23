'use client'
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import './switch-theme.css';

const switchThemeContext = createContext("dino")

const useSwitchTheme = () => {
    let { stateSwitchTheme, setStateSwitchTheme } = useContext(switchThemeContext)
    return { stateSwitchTheme, setStateSwitchTheme }
}

const ProviderSwitchTheme = ({ children, data }) => {
    return (
        <switchThemeContext.Provider value={data}>
            {children}
        </switchThemeContext.Provider>
    )
}

const DivSwitchTheme = ({ children, className, data }) => {

    let c1 = data?.c1 ? data.c1 : ''
    let c2 = data?.c2 ? data.c2 : ''
    let getSwTheme = false

    // try { getSwTheme = JSON.parse(localStorage.getItem('LSSwitchT')).SwTheme }
    // catch (e) {
    //     // console.log(e);
    //     getSwTheme = matchMedia('(prefers-color-scheme: dark)').matches ? true : false
    //     // getSwTheme = true
    //     // console.log(getSwTheme)
    // }

    let [stateSwitchTheme, setStateSwitchTheme] = useState(getSwTheme)

    useEffect(() => {
        try { setStateSwitchTheme(JSON.parse(localStorage.getItem('LSSwitchT')).SwTheme) }
        catch (e) {
            // console.log(e);
            setStateSwitchTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? true : false)
            // getSwTheme = true
            // console.log(getSwTheme)
        }
        console.log('diiii')
    }, [])
    // let uy = useRef(1)

    useEffect(() => {

        // if (uy.current == 2) {
        console.log('dioooo' + stateSwitchTheme)

        setTimeout(() => {
            localStorage.setItem('LSSwitchT', JSON.stringify({ SwTheme: stateSwitchTheme }))

        }, 0)

        // } else {
        //     uy.current = 2
        // }
    }, [stateSwitchTheme])
    console.log('tt ' + stateSwitchTheme)

    return (
        <ProviderSwitchTheme data={{ stateSwitchTheme, setStateSwitchTheme }}>
            <div className={`${className ? className : ''} ${stateSwitchTheme ? c2 : c1}`}>{children}</div>
        </ProviderSwitchTheme>
    )
}
const SwitchTheme = ({ ...props }) => {

    let { setStateSwitchTheme, stateSwitchTheme } = useSwitchTheme()

    function cambio() {
        setStateSwitchTheme(!stateSwitchTheme)
        // console.log(stateSwitchTheme)
    }
    return (
        <>
            <div className="switchTheme" {...props} onClick={() => cambio()}>

                <div className="switchTheme-contentIconLeft">
                    {/* <img src={luna.src} alt="" /> */}
                </div>
                <span style={{ transform: `${stateSwitchTheme ? 'translate(16px, 0px)' : ''}` }} >
                    {stateSwitchTheme ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 50 50" strokeWidth={1.5} stroke="currentColor" >
                            <path d="M13.42,4C11.91,4.59.2,15.33,3.52,28.84A23.58,23.58,0,0,0,19,45.21c14.42,4.6,27.89-8,28-9.48a1.15,1.15,0,0,0-.23-1,1.25,1.25,0,0,0-1.14-.06A24.45,24.45,0,0,1,20.17,28c-8.65-9.62-5.34-22.08-5.12-22.88a1.29,1.29,0,0,0-.25-1.15C14.4,3.61,13.69,3.89,13.42,4Z" />
                        </svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 50 50" strokeWidth={1.5} stroke="currentColor" >
                            <circle cx="25" cy="25" r="12.27" /><path d="M19.71,47.05a1.22,1.22,0,1,0,1.65-1.81,10.19,10.19,0,0,1-1-1L20.14,44a6.24,6.24,0,0,1-.71-1.55,1.85,1.85,0,0,0-.37-.72,1.34,1.34,0,0,0-.5-.31,1.3,1.3,0,0,0-1.43.59,1.34,1.34,0,0,0,0,1A8.58,8.58,0,0,0,19.71,47.05Z" /><path d="M5.67,36.85a1.23,1.23,0,1,0,2.45-.11,10.48,10.48,0,0,1,0-1.46c0-.13,0-.19,0-.27a5.53,5.53,0,0,1,.59-1.6A1.81,1.81,0,0,0,9,32.64a1.21,1.21,0,0,0-.13-.58,1.3,1.3,0,0,0-1.43-.59,1.35,1.35,0,0,0-.74.68A8.64,8.64,0,0,0,5.67,36.85Z" /><path d="M3,19.71a1.22,1.22,0,1,0,1.81,1.65,11.36,11.36,0,0,1,1-1L6,20.14a5.94,5.94,0,0,1,1.54-.71,1.85,1.85,0,0,0,.72-.37,1.34,1.34,0,0,0,.31-.5A1.3,1.3,0,0,0,8,17.13a1.34,1.34,0,0,0-1,0A8.58,8.58,0,0,0,3,19.71Z" /><path d="M13.15,5.67a1.23,1.23,0,0,0,.11,2.45,10.49,10.49,0,0,1,1.46,0l.27,0a5.53,5.53,0,0,1,1.6.59,1.81,1.81,0,0,0,.77.24,1.21,1.21,0,0,0,.58-.13,1.3,1.3,0,0,0,.59-1.43,1.35,1.35,0,0,0-.68-.74A8.64,8.64,0,0,0,13.15,5.67Z" /><path d="M30.29,3a1.22,1.22,0,1,0-1.65,1.81,11.36,11.36,0,0,1,1,1,2.22,2.22,0,0,1,.17.22,5.55,5.55,0,0,1,.72,1.54,1.85,1.85,0,0,0,.37.72,1.34,1.34,0,0,0,.5.31A1.3,1.3,0,0,0,32.87,8a1.34,1.34,0,0,0,0-1A8.58,8.58,0,0,0,30.29,3Z" /><path d="M44.33,13.15a1.23,1.23,0,1,0-2.45.11,10.49,10.49,0,0,1,0,1.46c0,.13,0,.19,0,.27a5.53,5.53,0,0,1-.59,1.6,1.81,1.81,0,0,0-.24.77,1.21,1.21,0,0,0,.13.58,1.3,1.3,0,0,0,1.43.59,1.35,1.35,0,0,0,.74-.68A8.64,8.64,0,0,0,44.33,13.15Z" /><path d="M47.05,30.29a1.22,1.22,0,1,0-1.81-1.65,10.19,10.19,0,0,1-1,1l-.21.17a5.82,5.82,0,0,1-1.55.72,1.85,1.85,0,0,0-.72.37,1.34,1.34,0,0,0-.31.5A1.3,1.3,0,0,0,42,32.87a1.34,1.34,0,0,0,1,0A8.58,8.58,0,0,0,47.05,30.29Z" /><path d="M36.85,44.33a1.23,1.23,0,0,0-.11-2.45,10.48,10.48,0,0,1-1.46,0l-.27,0a5.53,5.53,0,0,1-1.6-.59,1.81,1.81,0,0,0-.77-.24,1.21,1.21,0,0,0-.58.13,1.3,1.3,0,0,0-.59,1.43,1.35,1.35,0,0,0,.68.74A8.64,8.64,0,0,0,36.85,44.33Z" />
                        </svg>}


                </span>
                <div className="switchTheme-contentIconRight">
                    {/* <img src={sol.src} alt="" /> */}
                </div>

            </div>
        </>
    )
}

export { SwitchTheme, DivSwitchTheme, useSwitchTheme };