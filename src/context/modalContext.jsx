'use client'
import React from 'react'
import { useContext, createContext, useState } from 'react'


const ModalContext = createContext()
export function ModalProvider({children}) {
    const [isOpen, setIsOpen] = useState(false)
  
    function openHandler() {
        setIsOpen(true)
        console.log(isOpen)
    }

    function closeModal() {
        setIsOpen(false)
    }

    return <ModalContext.Provider value={{isOpen, setIsOpen, openHandler, closeModal}}>{children}</ModalContext.Provider>
}

export function useModal() {
    return useContext(ModalContext)
}