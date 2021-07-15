import { USER_NAME, USER_EMAIL, USER_DOB, USER_GENDER, USER_PASSWORD, USER_PHONE, TOKEN, TRELLO_ID, LOGIN_ACCESS, REGISTRATION, FULL_ACCESS, USER_LOGIN_EMAIL, USER_LOGIN_PASSWORD } from "../../Constants/API/ApiConstants";


const IntialValue = {
    
    //This is the user Registration Part.
    user_name: "",
    user_email: "",
    user_pass: "",
    user_dob: "",
    user_phone: "",
    user_gender: "",
    registrationAccess: false,

    //This is the User Login Part.
    fullAccess: false,
    token: "",
    trelloID: "",
    loginAccess: false,
    user_login_email: "",
    user_login_password: "",
}


const ApiData = (state = IntialValue, action) => {
    switch (action.type) {
        case USER_NAME:
            return {
                ...state,
                user_name: action.user_name
            }
        case USER_EMAIL:
            return {
                ...state,
                user_email: action.user_email
            }
        case USER_DOB:
            return {
                ...state,
                user_dob: action.user_dob
            }
        case USER_GENDER:
            return {
                ...state,
                user_gender: action.user_gender
            }
        case USER_PASSWORD:
            return {
                ...state,
                user_pass: action.user_pass
            }
        case USER_PHONE:
            return {
                ...state,
                user_phone: action.user_phone
            }
        case TRELLO_ID:
            return {
                ...state,
                trelloID: action.trelloID
            }
        case TOKEN:
            return {
                ...state,
                token: action.token
            }
        case USER_LOGIN_EMAIL:
            return {
                ...state,
                user_login_email: action.user_login_email
            }
        case USER_LOGIN_PASSWORD:
            return {
                ...state,
                user_login_password: action.user_login_password
            }
        case LOGIN_ACCESS:
            return {
                ...state,
                loginAccess: action.loginAccess
            }
        case REGISTRATION:
            return {
                ...state,
                registrationAccess: action.registrationAccess
            }
        case FULL_ACCESS:
            return {
                ...state,
                fullAccess: action.fullAccess
            }
        default:
            return state;
    }
}

export default ApiData;