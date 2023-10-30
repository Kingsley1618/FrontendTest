'use client'
import React, {useState} from 'react'
import Logo from "@/assets/jpg/mainstack-logo.jpg"
import homeIcon from "@/assets/jpg/home.jpg"
import analyticsIcon from "@/assets/jpg/insert_chart.jpg"
import paymentLogo from "@/assets/jpg/payments.jpg"
import notificationIcon from "@/assets/jpg/notifications.jpg"
import chatIcon from "@/assets/jpg/chaticon.jpg"
import userLogo from "@/assets/jpg/group.jpg"
import widgetLogo from "@/assets/jpg/widgets.jpg"
import DropdownMenu from './dropdownMenu'
import avatarLogo from "@/assets/jpg/avi.jpg"
import barLogo from "@/assets/jpg/menu.jpg"
import IconBar from '../iconBar'
import Image from 'next/image'
import Link from 'next/link'
export default function Header() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  function menuHandler(): void {
    setOpenMenu((menu) => !menu);
  }
  return (
    <>
    <div className='fixed top-0 left-0 right-0 bg-white z-[22] pt-[16px] px-[16px] flex justify-center w-full'>
    <nav  className='flex z-[22] px-3 z-[-1] mx-auto border-[2px] justify-between max-w-[1408px] border-[rgba(255, 255, 255, 1)] border-solid rounded-[100px] bg-white h-[64px] items-center  w-[100%] ' style ={{boxShadow:"0px 2px 6px 0px rgba(45, 59, 67, 0.06),0px 2px 6px 0px rgba(45, 59, 67, 0.06)"}}>

<Image src = {Logo} className='' loading='lazy' alt='logo' width={36} height={36} />



<ul className='lg:flex hidden flex-row gap-x-[20px] items-center'>
<Link href="#"><li className='flex flex-row flex-wrap gap-x-[4px] py-[8px] pe-[18px] ps-[14px]'><Image src = {homeIcon} className='' alt='homeicon' width={20} height={20} /><h1 className='font-[degular] font-[600] leading-6 tracking-[-0.4px] text-[1rem] '>Home</h1></li></Link>

<Link href= "#"><li className='flex flex-row flex-wrap justify-center items-center gap-x-[4px] py-[8px] pe-[18px] ps-[14px]'><Image src = {analyticsIcon} className='' alt='homeicon' width={20} height={20} /><h1 className='font-[degular] font-[600] leading-6 tracking-[-0.4px] text-[1rem]'>Analytics</h1></li></Link>
<Link href= "#"><li className={`flex  flex-row ${openMenu ? "text-black" : "text-white"} flex-wrap items-center justify-center gap-x-[4px] ${!openMenu? "rounded-[100px]" : ""} py-[8px] ${openMenu ? "" : "bg-[rgba(19,19,22,1)]"} pe-[18px] ps-[14px]`}><Image src = {userLogo} className='' alt='homeicon' width={20} height={20} /><h1 className='font-[degular] font-[600] leading-6 tracking-[-0.4px] text-[1rem]'>Revenue</h1></li></Link>
<Link href= "#"><li className='flex flex-row flex-wrap items-center justify-center gap-x-[4px] py-[8px] pe-[18px] ps-[14px]'><Image src = {userLogo} className='' alt='homeicon' width={20} height={20} /><h1 className='font-[degular] font-[600] leading-6 tracking-[-0.4px] text-[1rem]'>CRM</h1></li></Link>
<Link href= "#"><li className='flex flex-row flex-wrap items-center justify-center gap-x-[4px] py-[8px] pe-[18px] ps-[14px]'><Image src = {widgetLogo} className='' alt='homeicon' width={20} height={20} /><h1 className='font-[degular] font-[600] leading-6 tracking-[-0.4px] text-[1rem]'>Apps</h1></li></Link>


</ul>




<div className='gap-x-[8px] flex items-center flex-wrap '>
<Image src = {notificationIcon} className='cursor-pointer ' alt='notificationicon' width={20} height={20} />
<Image src = {chatIcon} className='cursor-pointer  w-[20px] h-[20px]' alt='chaticon' width={20} height={20} />

<div onClick={menuHandler} className='flex items-center  bg-[#EFF1F6] rounded-[100px] py-[4px] gap-[8px] pe-[12px] ps-[5px] cursor-pointer'>
<Image src = {avatarLogo} className='rounded-full w-[24px] h-[24px]' alt='avataricon' width={24} height={24} />
<Image src = {barLogo} className='' alt='baricon' width={24} height={24} />
</div>
</div>
    </nav>
    </div>
    
 <DropdownMenu openMenu = {openMenu}/>

 <IconBar />
    </>
  )
}
