import React from 'react'
import infoIcon from "@/assets/jpg/info.jpg"
import Image from 'next/image'
import {getWallet} from "@/utils/getWallet"
export default async function LedgerBalance() {
  const wallet = await getWallet()
  return (
   <>
   <div className='w-[100%]'>
   <div className='flex justify-between items-center'>
    <div className='flex-1 gap-x-[8px]'>
<h1 className='text-[0.875rem] font-[500] leading-[16px] tracking-[-.2px]'>Ledger Balance</h1>
</div>
<Image src = {infoIcon} className='' alt='infoicon' width={20} height={20} />
   </div>
   <h1 className='font-[700] mt-[8px] leading-[38px] text-[#131316] tracking-[-.6px] text-[1.75rem]'>USD {wallet.ledger_balance}</h1>
   </div>


   <div className='w-[100%]'>
   <div className='flex justify-between items-center'>
    <div className='flex-1 gap-x-[8px]'>
<h1 className='text-[0.875rem] font-[500] leading-[16px] tracking-[-.2px] '>Total Payout</h1>
</div>
<Image src = {infoIcon} className='' alt='infoicon' width={20} height={20} />
   </div>
   <h1 className='font-[700] mt-[8px]  leading-[38px] text-[#131316] tracking-[-0.6px] text-[1.75rem]'>USD {wallet.total_payout}</h1>
   </div>



   <div className='w-[100%]'>
   <div className='flex justify-between items-center'>
    <div className='flex-1 gap-x-[8px]'>
<h1 className='text-[0.875rem] font-[500] leading-[16px] tracking-[-.2px]'>Total Revenue</h1>
</div>
<Image src = {infoIcon} className='' alt='infoicon' width={20} height={20} />
   </div>
   <h1 className='font-[700] mt-[8px]  leading-[38px] text-[#131316] tracking-[-0.6px] text-[1.75rem]'>USD {wallet.total_revenue}</h1>
   </div>



   <div className='w-[100%]'>
   <div className='flex justify-between items-center'>
    <div className='flex-1 gap-x-[8px]'>
<h1 className='text-[0.875rem] font-[500] leading-[16px] tracking-[-.2px] '>Pending Payout</h1>
</div>
<Image src = {infoIcon} className='' alt='infoicon' width={20} height={20} />
   </div>
   <h1 className='font-[700] mt-[8px]  leading-[38px] text-[#131316] tracking-[-0.6px] text-[1.75rem]'>USD {wallet.pending_payout}</h1>
   </div>

   <div></div>
   </>
  )
}
