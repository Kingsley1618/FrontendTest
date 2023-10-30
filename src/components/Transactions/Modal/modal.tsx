'use client'
import React,{useState} from 'react'
import styles from "./modal.module.css"
import ModalHeader from "./modalHeader"
import { motion } from 'framer-motion'; 
import DropdownType from "./dropDownType"
import DropdownStatus from "./dropDownStatus"
import { useModal } from '@/context/modalContext'
import DatepickerComponent from "./DatePicker"
import DateInput from './DatePicker';
export default function Modal() {
  const {closeModal, isOpen} = useModal()
  const [active, setActive] = useState(false)
  function buttonHandler() {
    setActive(true)
  }
  const modalVariants = {
    hidden: { right: '-100%' }, 
    visible: { right: 0 }, 
  };
  
  return (
    <>
   {isOpen ? 
<div className={styles.overlay} onClick={closeModal}>

</div> : null}


    <motion.div
    initial="hidden" 
    animate={isOpen ? 'visible' : 'hidden'} 
    variants={modalVariants} 
    transition={{ duration: 0.3, type: 'spring', stiffness: 80, damping: 20, mass: 1 }} 
    className='fixed z-[26] top-[12px] px-[22px]  flex flex-col  max-w-[456px] bg-white h-[90vh] rounded-[20px]' style={{boxShadow:"0px 8px 16px 4px rgba(188, 196, 204, 0.10), 0px 12px 24px 0px rgba(219, 222, 229, 0.10), 0px 16px 32px 0px rgba(219, 222, 229, 0.10)", backdropFilter: "blur(8px)"}}>
<div className='w-[100%] flex-1'>
<ModalHeader />

<DateInput />

<DropdownType label = "Transaction Type" buttonHandler = {buttonHandler}/>

<DropdownStatus label = "Transaction Status" buttonHandler = {buttonHandler}/>
</div>

<div className='flex gap-x-[12px] pb-[20px] px-[2px]  w-[100%]'>
  <button className='flex-1 rounded-[100px] px-[24px] py-[12px] text-[black] bg-[white] border-[1px] border-solid border-[#EFF1F6] text-center text-[1rem] leading-[24px] tracking-[-0.4px] font-[600]'>Clear</button>
  <button className={`flex-1 rounded-[100px] px-[24px] py-[12px] ${active ? "bg-[#131316]" : "bg-[#EFF1F6]"} text-white text-center text-[16px] leading-[24px] tracking-[-0.4px] font-[600]`}>Apply</button>
</div>
    </motion.div>

    </>
  )
}
