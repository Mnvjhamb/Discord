import React, {useEffect, useState} from 'react'
import AuthBox from '../../shared/components/AuthBox';
import Header from './Header';
import LoginInputs from './LoginInputs';
import Footer from './Footer';
import { validateLoginForm } from '../../shared/utils/validators';

import { connect } from 'react-redux';
import { getActions } from '../../../store/actions/authActions';

import { useNavigate } from 'react-router-dom';


const LoginPage = ({login}) => {

  const navigate = useNavigate();

  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(()=>{
    setIsFormValid(validateLoginForm({mail, password}));

  }, [mail, password, setIsFormValid])

  const handleLogin = ()=>{
    const userDetails = {
      mail,password
    }

    login(userDetails, navigate);

  }

  return (
    <AuthBox>
      <Header/>
      
      <LoginInputs 
        mail={mail}
        password={password}
        setMail={setMail}
        setPassword={setPassword}
      />

      <Footer 
        handleLogin={handleLogin}
        isFormValid={isFormValid}
      />

    </AuthBox>
  )
}

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch)
  }
}

export default connect(null, mapActionsToProps)(LoginPage);