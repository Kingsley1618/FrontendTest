import React from 'react'
import Image from 'next/image'
import IconOne from "@/assets/svg/app-bar-list (5).svg"
import IconTwo from "@/assets/svg/app-bar-list (2).svg"
import IconThree from "@/assets/svg/app-bar-list (1).svg"
import IconFour from "@/assets/svg/app-bar-list (4).svg"
export default function IconBar() {
  return (
    <div className='flex my-auto bg-white gap-y-[4px] h-[100%] max-h-[192px] flex-col items-center my-auto fixed left-[16px] top-0 bottom-0 p-[4px] rounded-[100px]' style ={{boxShadow: "0px 6px 12px 0px rgba(92, 115, 131, 0.08), 0px 4px 8px 0px rgba(92, 115, 131, 0.08)"}}>

<Image src = {IconOne} alt='appbaricon' className='cursor-pointer' width={40} height={40} />

<Image src = {IconTwo} alt='appbaricon' className='cursor-pointer' width={40} height={24} />
<Image src = {IconThree} alt='appbaricon' className='cursor-pointer' width={40} height={40} />
<Image src = {IconFour} alt='appbaricon' className='cursor-pointer' width={40} height={40} />

    </div>
  )
}
