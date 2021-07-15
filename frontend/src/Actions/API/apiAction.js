import {
    USER_NAME, USER_EMAIL, USER_DOB, USER_GENDER,
    USER_PASSWORD, USER_PHONE, TOKEN, TRELLO_ARRAY,
    TRELLO_ID, LOGIN_ACCESS, REGISTRATION, FULL_ACCESS,
    USER_LOGIN_EMAIL, USER_LOGIN_PASSWORD
} from "../../Constants/API/ApiConstants";


import { setSnackOpen, setSnackMassage, setSnackColor } from '../Snack/SnackAction';

import { LoginStore, loginPassword } from '../log/loginAction';

import { setProfileAccess } from '../Profile/ProfileAction';

export const setUserName = (user_name) => {
    return {
        type: USER_NAME,
        user_name: user_name
    }
}

export const setUserEmail = (user_email) => {
    return {
        type: USER_EMAIL,
        user_email: user_email
    }
}

export const setUserDob = (user_dob) => {
    return {
        type: USER_DOB,
        user_dob: user_dob
    }
}

export const setUserGender = (user_gender) => {
    return {
        type: USER_GENDER,
        user_gender: user_gender
    }
}

export const setUserPhone = (user_phone) => {
    return {
        type: USER_PHONE,
        user_phone: user_phone
    }
}

export const setUserPass = (user_pass) => {
    return {
        type: USER_PASSWORD,
        user_pass: user_pass
    }
}

export const setUserToken = (token) => {
    return {
        type: TOKEN,
        token: token
    }
}

export const setUserID = (trelloID) => {
    return {
        type: TRELLO_ID,
        trelloID: trelloID
    }
}

export const userRegister = (user_name, user_email, user_gender, user_dob, user_phone, user_pass) => {
    return (dispatch) => {
        return fetch("/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_name: user_name,
                user_email: user_email,
                user_pass: user_pass,
                user_dob: user_dob,
                user_gender: user_gender,
                user_phone: user_phone,
                trello_db: [],
                tokens: " ",
                Card_ID: ""
            })
        }).then((response) => (response.json()))
            .then((responseData) => {
                if (responseData.success) {
                    dispatch(setLogin(true));
                    dispatch(setRegistration(false));
                    dispatch(setUserName(''));
                    dispatch(setUserEmail(''));
                    dispatch(setUserDob(''));
                    dispatch(setUserGender(''));
                    dispatch(setUserPhone(''));
                    dispatch(setUserPass(''));
                    dispatch(setSnackMassage(responseData.success));
                    dispatch(setSnackColor('success'));
                    dispatch(setSnackOpen(true));
                }
                else if (responseData.info) {
                    dispatch(setLogin(true));
                    dispatch(setRegistration(false));
                    dispatch(setUserName(''));
                    dispatch(setUserEmail(''));
                    dispatch(setUserDob(''));
                    dispatch(setUserGender(''));
                    dispatch(setUserPhone(''));
                    dispatch(setUserPass(''));
                    dispatch(setSnackMassage(responseData.info));
                    dispatch(setSnackColor('info'));
                    dispatch(setSnackOpen(true));
                }
                else {
                    dispatch(setRegistration(true));
                    dispatch(setLogin(false));
                    dispatch(setSnackMassage(responseData.empty));
                    dispatch(setSnackColor('warning'));
                    dispatch(setSnackOpen(true));
                }
            })
    }
}

export const setLogin = (loginAccess) => {
    return {
        type: LOGIN_ACCESS,
        loginAccess: loginAccess
    }
}

export const setRegistration = (registrationAccess) => {
    return {
        type: REGISTRATION,
        registrationAccess: registrationAccess
    }
}

export const setUserLoginEmail = (user_login_email) => {
    return {
        type: USER_LOGIN_EMAIL,
        user_login_email: user_login_email
    }
}

export const setUserLoginPassword = (user_login_password) => {
    return {
        type: USER_LOGIN_PASSWORD,
        user_login_password: user_login_password
    }
}

export const userLogedin = (user_email, user_pass) => {
    return (dispatch) => {
        return fetch('/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_email: user_email,
                user_pass: user_pass
            })
        }).then((response) => (response.json()))
            .then((responseData) => {
                if (responseData.success) {
                    localStorage.setItem("token", responseData.token);
                    dispatch(setUserToken(responseData.token));
                    dispatch(setUserID(responseData.data._id));
                    dispatch(setTrello(responseData.data.trello_db));
                    dispatch(LoginStore(
                        responseData.data.user_name,
                        responseData.data.user_email,                        
                        responseData.data.user_dob,
                        responseData.data.user_phone,
                        responseData.data.user_gender
                    ));
                    dispatch(loginPassword(responseData.data.user_pass));
                    dispatch(setProfileAccess(true));
                    dispatch(setFullAccess(true));
                    dispatch(setLogin(false));
                    dispatch(setUserLoginEmail(''));
                    dispatch(setUserLoginPassword(''));
                    dispatch(setSnackMassage(responseData.success));
                    dispatch(setSnackColor('success'));
                    dispatch(setSnackOpen(true));
                }
                else if (responseData.empty) {
                    dispatch(setSnackMassage(responseData.empty));
                    dispatch(setSnackColor('warning'));
                    dispatch(setSnackOpen(true));
                }
                else {
                    dispatch(setSnackMassage(responseData.error));
                    dispatch(setSnackColor('error'));
                    dispatch(setSnackOpen(true));
                    dispatch(setFullAccess(false));
                    dispatch(setLogin(true));
                }
            });
    }
}

export const setLocalAccess = (user_token) => {
    return (dispatch) => {
        return fetch('/LocalAccess', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                user_token: user_token
            })
        }).then((response) => (response.json()))
        .then((responseData) => {
            if (responseData.success) {
                dispatch(setUserToken(responseData.data.tokens));
                dispatch(setUserID(responseData.data._id));
                dispatch(setTrello(responseData.data.trello_db));
                dispatch(LoginStore(
                    responseData.data.user_name,
                    responseData.data.user_email,                        
                    responseData.data.user_dob,
                    responseData.data.user_phone,
                    responseData.data.user_gender
                ));
                dispatch(loginPassword(responseData.data.user_pass));
                dispatch(setProfileAccess(true));
                dispatch(setFullAccess(true));
            }
        });   
    }
}

export const setFullAccess = (fullAccess) => {
    return {
        type: FULL_ACCESS,
        fullAccess: fullAccess
    }
}

export const setLogOut = (user_email, user_id, user_token, tempList) => {
    return (dispatch) => {
        localStorage.removeItem("token");
        dispatch(setUserEmail(''));
        dispatch(setUserPass(''));
        dispatch(setUserToken(''));
        dispatch(setUserID(''));
        dispatch(setTrello([]));
        dispatch(setFullAccess(false));
        dispatch(setLogin(false));
        dispatch(setRegistration(false));
        dispatch(setTrelloUpdate(user_email, user_id, user_token, tempList));
        dispatch(setSnackMassage('Logout Successfully'));
        dispatch(setSnackColor('info'));
        dispatch(setSnackOpen(true));
        dispatch(setProfileAccess(false));
    }
}

export const setTrello = (tempList) => {
    return {
        type: TRELLO_ARRAY,
        tempList: tempList
    }
}

export const setTrelloUpdate = (user_email, user_id, user_token, tempList) => {
    return (dispatch) => {
        return fetch('/trelloupdate', {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user_email: user_email,
                user_id: user_id,
                user_token: user_token,
                trello_db: tempList
            })
        })
    }
}