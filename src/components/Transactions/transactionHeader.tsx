'use client'
import React from 'react'
import { useModal } from '@/context/modalContext'
import styles from "./transaction.module.css"
import {IoIosArrowDown} from "react-icons/io"
import {AiOutlineDownload} from "react-icons/ai"
export default function TransactionHeader() {
  const {openHandler} = useModal()
  return (
    <div className={`flex w-[100%]  ${styles.main}`}>
<div className='flex-1'>
<h1 className={styles.header}>24 Transactions</h1>
<p className={styles.text}>Your transactions for the last 7 days</p>
</div>

<div className='flex gap-x-[12px]'>
    <button type="button" onClick={openHandler} className={styles.filterbutton}><h1 className={styles.filter}>Filter</h1> <IoIosArrowDown className="text-[20px] pl-[4px]"/></button>

    <button type="button" className={styles.filterbutton}><h1 className={styles.filter}>Expand List</h1> <AiOutlineDownload className="text-[20px] pl-[4px]"/></button>

</div>
    </div>
  )
}
