import React from 'react'
import PrimaryButton from '../../shared/components/PrimaryButton'
import RedirectInfo from '../../shared/components/RedirectInfo'
import { useNavigate } from 'react-router-dom'

import { Tooltip } from '@mui/material'

const getFormValidMessage = ()=>{
  return "Press to Login";
}

const getFormInValidMessage = ()=>{
  return "Enter valid credentials"
}

export default function Footer(props) {

    const { handleLogin, isFormValid } = props

    const navigate = useNavigate();

    const handlePushToRegisterPage = ()=>{
      navigate('/register')
    }

  return (
      <>

        <Tooltip
          title={isFormValid ? getFormValidMessage() : getFormInValidMessage()}
        >
          <div>              
              <PrimaryButton 
                  label='Log In'
                  additionalStyles={{marginTop: '30px'}}
                  disabled={!isFormValid}
                  onClick={handleLogin}
                  />
          </div>
        </Tooltip>

        <RedirectInfo 
          text="Need an account? "
          redirectText='Create an Account'
          additionalstyles={{marginTop: '5px'}}
          redirectHandler={handlePushToRegisterPage}
        />

        </>
  )
}
