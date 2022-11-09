import React from 'react'
import { styled } from '@mui/system';

const Wrapper = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%'
})

const Label = styled('p')({
    color: '#b9bbbe',
    textTransform: 'uppercase',
    fontWeight: '600',
    fontSize: '16px'
})

const Input = styled('input')({
    flexGrow: 1,
    height: '40px',
    border: '1px solid black',
    borderRadius: '5px',
    color: '#36393f',
    background: '#3539f',
    margin: 0,
    padding: '0 5px',
    fontSize: '16px'
})

export default function Inputs(props) {

    const {
        value,
        setValue,
        label,
        placeholder,
        type
    } = props;

    const handleValueChange = (e)=>{
        setValue(e.target.value)
    }

  return (
    
    <Wrapper>
        <Label>{label}</Label>
        <Input 
            value={value}
            onChange={handleValueChange}
            placeholder={placeholder}
            type={type}
        />
    </Wrapper>

  )
}
