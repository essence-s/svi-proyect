// 'use client'
import ContenidosAN from "@/components/contenidos-an/contenidos-an"
import { UserContextProvider } from "@/context/UserContext"
import { FakeDBContextProvider } from "@/context/fakeDBContext"
// import { usePathname, useSearchParams } from "next/navigation"
// import { useEffect, useState } from "react"

export default function LayoutDashboard({ children }) {



    // const pathName = usePathname()
    // // const pathName = useSearchParams()
    // // console.log(pathName)
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
    return (
        <>
            <FakeDBContextProvider>
                <UserContextProvider>
                    <ContenidosAN>
                        {children}
                    </ContenidosAN>
                </UserContextProvider>
            </FakeDBContextProvider>
        </>
    )
}