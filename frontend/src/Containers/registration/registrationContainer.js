import RegisterComp from '../../Components/registration/registerComponent';
import { connect } from "react-redux";
import { setUserName, setUserEmail, setUserGender, setUserDob, 
         setUserPass, setUserPhone, setLogin, userRegister, setRegistration 
       } from '../../Actions/API/apiAction';
       
const sendData = (dispatch) => ({
    setName: (user_name) => {
        dispatch(setUserName(user_name));
    },
    setEmail: (user_email) => {
        dispatch(setUserEmail(user_email));
    },
    setGender: (user_gender) => {
        dispatch(setUserGender(user_gender));
    },
    setDob: (user_dob) => {
        dispatch(setUserDob(user_dob));
    },
    setPass: (user_pass) => {
        dispatch(setUserPass(user_pass));
    },
    setPhone: (user_phone) => {
        dispatch(setUserPhone(user_phone));
    },
    setUserRegister: (user_name, user_email, user_gender, user_dob, user_phone, user_pass) => {
        dispatch(userRegister(user_name, user_email, user_gender, user_dob, user_phone, user_pass));
    },
    setUserLogin: (loginAccess) => {
        dispatch(setLogin(loginAccess));
    },
    setRegistrationAccess: (registrationAccess) => {
        dispatch(setRegistration(registrationAccess));
    },
});

const reciveData = (state) => ({
    state: state,
});

export default connect(reciveData, sendData)(RegisterComp);
