import React from 'react'
import CloseIcon from "@/assets/svg/close.svg"
import Image from 'next/image'
import { useModal } from '@/context/modalContext'
export default function ModalHeader() {
  const {closeModal} = useModal()
  return (
    <>
    <div className='justify-between flex  pb-[20px] px-[2px] pt-[20px] items-center'>
        <h1 className='flex-1 capitalize  font-[900] font-normal text-[24px] leading-[28.8px]'>Filter</h1>
<Image src = {CloseIcon} className='cursor-pointer' width={24} height={24} alt="close-icon" onClick={closeModal}/>

    </div>
    

    <div className='flex gap-x-[12px] items-center flex-wrap gap-y-2 mt-[8px]'>
<div className='py-[10px] px-[18px] text-[14px] leading-[16px] tracking-[-.4px] font-[600] text-[#131316] rounded-[100px] bg-white border-[1px] border-solid border-[#131316,#EFF1F6]'>Today</div>

<div className='py-[10px] px-[18px] leading-[16px] tracking-[-.4px] font-[600]  text-[#131316] text-[14px] rounded-[100px] bg-white border-[1px] border-solid border-[#131316,#EFF1F6]'>last 7 days</div>

<div className='py-[10px] px-[18px] leading-[16px] tracking-[-.4px] font-[600]  text-[#131316] text-[14px]  rounded-[100px] bg-white border-[1px] border-solid border-[#131316,#EFF1F6]'>This month</div>

<div className='py-[10px] px-[18px] leading-[16px] tracking-[-.4px] font-[600]  text-[#131316] text-[14px]  rounded-[100px] bg-white border-[1px] border-solid border-[#131316,#EFF1F6]'>last 3 months</div>
    </div>
    
    </>
  )
}
