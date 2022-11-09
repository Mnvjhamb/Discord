import React from 'react'
import PrimaryButton from '../../shared/components/PrimaryButton'
import RedirectInfo from '../../shared/components/RedirectInfo'
import { useNavigate } from 'react-router-dom'

import { Tooltip } from '@mui/material'

const getFormValidMessage = ()=>{
  return "Press to Register";
}

const getFormInValidMessage = ()=>{
  return "Enter valid credentials"
}

export default function Footer(props) {

    const { handleRegister, isFormValid } = props

    const navigate = useNavigate();

    const handlePushToLoginPage = ()=>{
      navigate('/login')
    }

  return (
      <>

        <Tooltip
          title={isFormValid ? getFormValidMessage() : getFormInValidMessage()}
        >
          <div>              
              <PrimaryButton 
                  label='Register'
                  additionalStyles={{marginTop: '30px'}}
                  disabled={!isFormValid}
                  onClick={handleRegister}
                  />
          </div>
        </Tooltip>

        <RedirectInfo 
          text="Already have an account? "
          redirectText='Login here'
          additionalstyles={{marginTop: '5px'}}
          redirectHandler={handlePushToLoginPage}
        />

        </>
  )
}
