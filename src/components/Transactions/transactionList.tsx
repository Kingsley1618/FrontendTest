import React from 'react'
import {getTransaction} from "@/utils/getTransactions"
import Image from 'next/image'
import styles from "./transaction.module.css"
import dayjs from 'dayjs'; 
import transactionIcon from "@/assets/svg/call_received.svg"
import withdrawalIcon from "@/assets/svg/call_made.svg"
interface Transaction {
  amount: number;
  metadata: {
    product_name: string; 
    name: string;
  };
  type : string;
  status : string;
  date: string;
}
export default async function TransactionList() {
  const transaction = await getTransaction()
 
  return (
    <div className='mt-[33px] flex flex-col gap-y-[24px]'>

{transaction.map((transactions: Transaction, index: number)=> { 
  return <div key ={index} className='flex justify-between items-center'>

<div className='flex gap-x-[14.5px]'>
  <Image src = {transactions.type === "deposit" ? transactionIcon : withdrawalIcon} alt="icon" width={20}  height={20} className={`w-[50px] h-[50px] ${transactions.type === "deposit" ? "bg-[#E3FCF2]" : "bg-[#F9E3E0]"} text-[40px] p-[14px] rounded-full items-center `}/>
  <div>
{!transactions?.metadata?.product_name ? 
<h1 className={styles.transaction_type}>Cash {transactions.type} </h1> : 
<h1 className={styles.transaction_type}>{transactions?.metadata?.product_name} </h1> }
{!transactions?.metadata?.name ? 
<p className={transactions?.status === "successful" ? styles.success : transactions?.status === "pending" ? "text-[#A77A07]" : ""}>{transactions?.status}</p> : 
<p className={styles.person}>{transactions?.metadata?.name}</p>}
</div>
</div>

<div className='ms-auto'>
  <h1 className={styles.amount}>USD {transactions?.amount}</h1>
  <p className={styles.date}>{dayjs(transaction.date).format('YYYY-MMMM-DD')} </p>
</div>

</div>
})}



</div>
  )
}
