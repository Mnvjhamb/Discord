import React from 'react'
import Inputs from '../../shared/components/Inputs';

export default function RegisterInputs(props) {

    const {email, password, username, setMail, setPassword, setUsername} = props;

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
            value={username}
            setValue={setUsername}
            label='Username'
            type='text'
            placeholder='Enter username'
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
