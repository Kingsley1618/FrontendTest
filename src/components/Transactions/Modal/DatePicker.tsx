'use client'
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { IoIosArrowDown } from 'react-icons/io';
import styles from './modal.module.css';

interface DateInputProps {
  id: string;
}

function DateInput({ id }: DateInputProps) {
  const initialDate = new Date(); 

  const [input1Date, setInput1Date] = useState<Date>(initialDate);
  const [input2Date, setInput2Date] = useState<Date>(initialDate);
  const [showCalendar1, setShowCalendar1] = useState<boolean>(false);
  const [showCalendar2, setShowCalendar2] = useState<boolean>(false);

  const handleCalendarChange = (date: Date, inputNumber: number) => {
    if (inputNumber === 1) {
      setInput1Date(date);
      setShowCalendar1(false);
    } else if (inputNumber === 2) {
      setInput2Date(date);
      setShowCalendar2(false);
    }
  };

  function openCalenderOne() {
       setShowCalendar1(open => !open);
  }
   function openCalenderTwo() {
       setShowCalendar2(open => !open);
  }


  return (
    <>
      <label htmlFor="input1">Date Input</label>
      <div className="flex gap-x-[6px] mt-[12px]">
        <div className="flex-1 flex py-[14px] px-[16px] bg-[#EFF1F6] border-[1px] border-solid border-[#EFF1F6] rounded-[12px]">
          <input
            type="text"
            id="input1"
            value={input1Date.toDateString()}
            onFocus={() => setShowCalendar1(true)}
            readOnly
            className="flex-1 w-[100%] bg-[transparent] outline-0 text-[14px] font-[500] leading-[16px] tracking-[-0.2px]"
          />
          <IoIosArrowDown className="cursor-pointer" onClick = {openCalenderOne}/>
        </div>
        <div className="flex-1 flex py-[14px] px-[16px] bg-[#EFF1F6] border-[1px] border-solid border-[#EFF1F6] rounded-[12px]">
          <input
            type="text"
            id="input2"
            value={input2Date.toDateString()}
            onFocus={() => setShowCalendar2(true)}
            readOnly
            className="flex-1 w-[100%] bg-[transparent] outline-0 text-[14px] font-[500] leading-[16px] tracking-[-0.2px]"
          />
          <IoIosArrowDown className="cursor-pointer" onClick = {openCalenderTwo}/>
        </div>
      </div>

      <div className={styles.calenderparent}>
        {showCalendar1 && (
          <div className={styles.calender}>
            <Calendar
              onChange={(date) => handleCalendarChange(date as Date, 1)}
              value={input1Date as Date}
            />
          </div>
        )}

        {showCalendar2 && (
          <div className={styles.calender}>
            <Calendar
              onChange={(date) => handleCalendarChange(date as Date, 2)}
              value={input2Date as Date}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default DateInput;

