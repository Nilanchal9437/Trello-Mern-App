import LoginComp from '../../Components/login/loginComponent';
import {connect} from 'react-redux';
import { setUserLoginPassword, setUserLoginEmail, userLogedin,setRegistration, setLogin } from '../../Actions/API/apiAction';


const sendData = (dispatch) => ({
    setEmail: (user_email) => {
        dispatch(setUserLoginEmail(user_email))
    },
    setPass: (user_pass) => {
        dispatch(setUserLoginPassword(user_pass))
    },
    setUserLogin: (user_email, user_pass) => {
        dispatch(userLogedin(user_email, user_pass));
    },
    setUserRegister: (registrationAccess) => {
        dispatch(setRegistration(registrationAccess));
    },
    setUserLoginAccess: (loginAccess) => {
        dispatch(setLogin(loginAccess));
    },
});

const reciveData = (state) => ({
    state : state,
});

export default connect(reciveData, sendData)(LoginComp);