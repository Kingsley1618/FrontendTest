'use client'
import React,{useState} from 'react';
import Typography from '@mui/material/Typography'; 
import OutlinedInput from '@mui/material/OutlinedInput';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';

import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const names = [
  'Store Transactions', 'Get Tipped ', 'Withdrawals', 'Chargebacks', 'Cashbacks', 'Refer & Earn'
];

export default function DropdownType({label, buttonHandler}) {
  const [transactionType, setTransactionType] = useState(names);
  
  const handleChange = (event) => {
    buttonHandler()
    const {
      target: { value },
    } = event;
    setTransactionType(
      
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl style={{marginTop:"24px"}}>
      <label htmlFor="select-label" className='text-[1rem] leading-[24px] tracking-[-.4px] font-[600] font-[degular]'>{label}</label>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={transactionType}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => (
            <MenuItem style={{ maxWidth:"360px", textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
              <Typography style={{ fontWeight: "500", fontSize: "14px", lineHeight: "16px", letterSpacing: "-0.2px" }}>{selected.join(', ')}</Typography>
            </MenuItem>
          )}
          style={{ maxWidth: "412px",minWidth: "412px",  width:"100%", height:"48px", marginTop:"12px", textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', border:"1px solid #EFF1F6", borderRadius:"12px",backgroundColor : "#EFF1F6",padding:"14px, 16px, 14px, 16px"}}
          sx={{
            '&.Mui-focused': {
              border: '3px solid #131316',
            },
          }}
      
        >
          {names.map((name) => (
            
            <MenuItem key={name} value={name} >
              <Checkbox checked={transactionType.indexOf(name) > -1} />
              <ListItemText primary={<Typography style={{ fontWeight: "500", fontSize: "14px", lineHeight: "16px", letterSpacing: "-0.2px" }}>{name}</Typography>} />
            </MenuItem>
           
          ))}
        </Select>
      </FormControl>
    </div>
  );
}