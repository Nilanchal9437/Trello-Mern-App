import {LOGIN_DATA , LOGIN_PASS, LOGIN_EMAIL} from '../../Constants/log/loginConstant';

const Intial = {

    user_name: "",
    user_email: "",
    user_pass: "",
    user_dob: "",
    user_phone: "",
    user_gender: "",

};

const LoginReducer = (state = Intial, action) => {
    switch(action.type){
        case LOGIN_DATA:
            return {
                ...state,
                user_name: action.user_name,
                user_email: action.user_email,
                user_dob: action.user_dob,
                user_phone: action.user_phone,
                user_gender: action.user_gender
            }
        case LOGIN_PASS:
            return {
                ...state,
                user_pass: action.user_pass
            }
        case LOGIN_EMAIL:
            return {
                ...state,
                user_email: action.user_email,
            }
        default:
            return state;
    }
}

export default LoginReducer;