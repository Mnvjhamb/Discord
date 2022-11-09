import React, {useEffect, useState} from 'react'
import AuthBox from '../../shared/components/AuthBox';
import Footer from './Footer';
import Header from './Header';
import RegisterInputs from './RegisterInputs';
import { validateRegisterForm } from '../../shared/utils/validators';

import { connect } from 'react-redux';
import { getActions } from '../../../store/actions/authActions';

import { useNavigate } from 'react-router-dom';


const RegisterPage = ({register}) => {

  const navigate = useNavigate(); 

  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(()=>{

    setIsFormValid(validateRegisterForm({mail, password, username}));

  }, [mail, password, username, setIsFormValid])

  const handleRegister = ()=>{

    const userDetails = {
      mail, password, username
    }

    register(userDetails, navigate);
    
  }

  return (
    <AuthBox>
      
      <Header />
      <RegisterInputs 
        mail={mail}
        password={password}
        username={username}
        setMail={setMail}
        setPassword={setPassword}
        setUsername={setUsername}
      />

      <Footer 
        isFormValid={isFormValid}
        handleRegister={handleRegister}
      />

    </AuthBox>
  )
}

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch)
  }
}

export default connect(null, mapActionsToProps)(RegisterPage);