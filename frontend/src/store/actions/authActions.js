import * as api from "../../api";
import alertActions, { openAlertMessage } from "./alertActions";

export const authActions = {
    SET_USER_DETAILS:  "AUTH.SET_USER_DETAILS"
}

export const getActions = (dispatch) => {
    return {
        login: (userDetails, navigate) => dispatch(login(userDetails, navigate)),
        register: (userDetails, navigate) => dispatch(register(userDetails, navigate))
    }
}

const setUserDetails = (userDetails)=>{
    return {
        type: authActions.SET_USER_DETAILS,
        userDetails
    }
}

const login = (userDetails, navigate)=>{
    return async (dispatch)=>{
        const res = await api.login(userDetails);
        console.log(res);
        if(res.error){
            // handle error alert
            dispatch(openAlertMessage(res?.exception?.response?.data))
        } else {
            const { userDetails } = res?.data;
            localStorage.setItem('user', JSON.stringify(userDetails));

            dispatch(setUserDetails(userDetails))
            navigate('/dashboard')
        }

    }
}

const register = (userDetails, navigate)=>{
    return async (dispatch)=>{
        const res = await api.register(userDetails);
        console.log(res);
        if(res.error){
            // handle error alert
            dispatch(alertActions(res?.exception?.response?.data))
        } else {
            const { userDetails } = res?.data;
            localStorage.setItem('user', JSON.stringify(userDetails));

            dispatch(setUserDetails(userDetails))
            navigate('/dashboard')
        }

    }
}