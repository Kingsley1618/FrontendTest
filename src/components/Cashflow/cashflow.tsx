import React from 'react'
import LedgerBalance from "./ledgerBalance"
import Line from "@/assets/svg/Line 29.svg"
import LineTwo from "@/assets/svg/Line 28.svg"
import {getWallet} from "@/utils/getWallet"
import Image from 'next/image'
import MyLineChart from './chart'
export default async function Cashflow() {
  const wallet = await getWallet()
  return (
    <div className='flex z-[-1] md:justify-between justify-center gap-y-[30px] max-w-[1160px]   lg:flex-row flex-col w-[100%] mx-auto mt-[144px] gap-x-[30px]'>
<div className='flex-1 w-[100%]'>

    <div className='flex md:justify-start justify-between gap-x-[64px] items-center w-[100%]'>
<div className='flex flex-col gap-y-[8px]'>
<h1 className='text-gray-600 text-[.9rem] font-[Degular]'>Available Balance</h1>
<p className='font-[700] text-[2.25rem] leading-[48px] tracking-[-1.5px]'>USD {wallet.balance}</p>
</div>

<button type="button" className='w-[100%] h-[52px] max-w-[167px] bg-[#131316] border text-center text-white text-base font-semibold font-[Degular] leading-normal rounded-[100px]'>Withdraw</button>
</div>
<div className='max-w-[765px] w-[100%] mt-[45px]'>
<Image src ={Line} alt= "lineimage" className="h-auto" width={765} height={765}/>
<Image src ={LineTwo} alt= "lineimage" className="mt-[19px]" width={765} height={765}/>

<div className='mt-[15px] flex justify-between'>
<h1 className='text-[14px] font-[500] text-[#56616B]' style = {{lineHeight : "16px", letterSpacing:"-0.2px"}}>April 1, 2022</h1>
<h1 className='text-[14px] font-[500] text-[#56616B]' style = {{lineHeight : "16px", letterSpacing:"-0.2px"}}>April 30, 2022</h1>
</div>
</div>

</div>

<div className='flex flex-col w-[100%] max-w-[271px] gap-y-[32px]'>
<LedgerBalance />
</div>


    </div>
  )
}
