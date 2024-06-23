'use client'
import Link from "next/link";

// import { invoke } from '@tauri-apps/api/tauri'
import { useEffect } from 'react'

export default function Home() {

  useEffect(() => {
    // invoke('close_splashscreen')
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={"/dashboard"} className="text-center">
        <div>Aqui Deberia estar El login :&apos;&apos;V</div>
        <div className="border-slate-800 border rounded-full mt-5 p-1">To Dashboard</div></Link>
      {/* src="/next.svg" */}
    </main>
  )
}
