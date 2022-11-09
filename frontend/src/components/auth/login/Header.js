import React from 'react'
import {Typography} from '@mui/material'

export default function Header() {
  return (
    <>
        <Typography variant='h5' sx={{color: 'white'}}>
            Welcome Back!
        </Typography>
        <Typography sx={{color: "#b9bbbe"}}>
            We are happy you are with us!
        </Typography>
    </>
  )
}
