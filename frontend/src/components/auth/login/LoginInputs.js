import React from 'react'
import Inputs from '../../shared/components/Inputs'

export default function LoginInputs(props) {

    const {email, password, setMail, setPassword} = props;

  return (
    <>
        <Inputs 
            value={email}
            setValue={setMail}
            label='E-mail'
            type='text'
            placeholder='Enter e-mail address'
            />
        <Inputs 
            value={password}
            setValue={setPassword}
            label='Password'
            type='password'
            placeholder='Enter password'
            />
    </>
  )
}
