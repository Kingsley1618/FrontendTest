import React from 'react'
import Modal from './Modal/modal'

import TransactionHeader from "./transactionHeader"
import TransactionList from "./transactionList"
export default function Transactions() {
  return (
   <div className='z-[-1]  max-w-[1160px] w-[100%] mx-auto block'>
   <TransactionHeader />
   
   <TransactionList />

   <Modal />
   </div>
  )
}
