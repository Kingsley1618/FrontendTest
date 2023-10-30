'use client'
import React,{useState} from 'react'
import avatarLogo from "@/assets/jpg/avi.jpg"
import {AiOutlineSetting} from "react-icons/ai"
import {BsGrid} from "react-icons/bs" 
import {MdCardGiftcard} from "react-icons/md"
import {MdOutlineSwitchAccount} from "react-icons/md"
import Image from 'next/image'
import {IoReceiptOutline} from "react-icons/io5"
import {RxExit} from "react-icons/rx"
import {AiOutlineBug} from "react-icons/ai"
interface DropdownMenuProps {
  openMenu: boolean; 
}

 const DropdownMenu: React.FC<DropdownMenuProps> = ({ openMenu }) => {
 
  return (
    <>
    {openMenu ? 
      <div className='fixed  top-[13%] w-[100%] z-[24] bg-[white] max-w-[350px] rounded-[40px] p-[16px]' style={{
        right: '16px',
        boxShadow: "0px 8px 16px 4px rgba(188, 196, 204, 0.10), 0px 12px 24px 0px rgba(219, 222, 229, 0.10), 0px 16px 32px 0px rgba(219, 222, 229, 0.10)",
        backdropFilter: "blur(8px)"
      }}> 
<div className='flex gap-x-[10px] px-[12px] items-center'>
<Image src = {avatarLogo} className='rounded-full w-[28px] h-[28px]' alt='avataricon' width={24} height={24} />

<div>
  <h1 className='font-[700]'>Olivier jones</h1>
  <p className='text-[.7rem] font-thin mt-[2px]'>olivierjones@gmail.com</p>
</div>
</div>

<div className="flex flex-col gap-y-[8px] mt-[12px]">
<div className='flex gap-x-[12px] items-center px-[12px] py-[10px] cursor-pointer'>
  <AiOutlineSetting className="text-[.9rem]"/> <h1 className='text-[.9rem]'>Settings</h1>
</div>

<div className='flex gap-x-[12px] items-center px-[12px] py-[10px] cursor-pointer'>
  <IoReceiptOutline className="text-[.9rem]"/> <h1 className='text-[.9rem]'>Purchase History</h1>
</div>



<div className='flex gap-x-[12px] items-center px-[12px] py-[10px] cursor-pointer'>
  <MdCardGiftcard className="text-[.9rem]"/> <h1 className='text-[.9rem]'>Refer and Earn</h1>
</div>



<div className='flex gap-x-[12px] items-center px-[12px] py-[10px]'>
  <BsGrid className="text-[.9rem]"/> <h1 className='text-[.9rem]'>Integrations</h1>
</div>



<div className='flex gap-x-[12px] items-center px-[12px] py-[10px] cursor-pointer'>
  <AiOutlineBug className="text-[.9rem]"/> <h1 className='text-[.9rem]'>Report Bug</h1>
</div>

<div className='flex gap-x-[12px] items-center px-[12px] py-[10px] cursor-pointer'>
  <MdOutlineSwitchAccount className="text-[.9rem]"/> <h1 className='text-[.9rem]'>Switch Accounts</h1>
</div>


<div className='flex gap-x-[12px] items-center px-[12px] pt-[10px] cursor-pointer'>
  <RxExit className="text-[.9rem]"/> <h1 className='text-[.9rem]'>Sign Out</h1>
</div>

</div>

      </div> : null }
   </>
  )
}

export default DropdownMenu
