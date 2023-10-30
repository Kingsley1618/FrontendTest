import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {ModalProvider} from "@/context/modalContext"
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Frontend Test',
  description: 'Not completed',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <ModalProvider>
        {children}
        </ModalProvider>
        </body>
    </html>
  )
}
