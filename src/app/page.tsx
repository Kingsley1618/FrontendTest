import Image from 'next/image'
import Header from "@/components/Header/header"
import Cashflow from "@/components/Cashflow/cashflow"

import Transactions from "@/components/Transactions/transactions"
export default function Home() {
  return (
   <div className='w-full relative'>
   <Header />

   <Cashflow />

   <Transactions />

   
   </div>
  )
}
