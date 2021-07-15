import {
    UPDATE_USER_NAME, UPDATE_USER_EMAIL,
    UPDATE_USER_DOB, UPDATE_USER_PHONE,
    UPDATE_USER_GENDER, PROFILE_ACCESS,
    DISPLAY_PROFILE
} from '../../Constants/Profile/ProfileConstant';

import { setSnackOpen, setSnackMassage, setSnackColor } from '../Snack/SnackAction';
import { LoginStore } from '../log/loginAction';

export const setUserUpdateName = (name) => {
    return {
        type: UPDATE_USER_NAME,
        name: name
    }
}
export const setUserUpdateEmail = (email) => {
    return {
        type: UPDATE_USER_EMAIL,
        email: email
    }
}
export const setUserUpdateDob = (dob) => {
    return {
        type: UPDATE_USER_DOB,
        dob: dob
    }
}
export const setUserUpdatePhone = (phone) => {
    return {
        type: UPDATE_USER_PHONE,
        phone: phone
    }
}
export const setUserUpdateGender = (gender) => {
    return {
        type: UPDATE_USER_GENDER,
        gender: gender
    }
}
export const setProfileAccess = (profileAccess) => {
    return {
        type: PROFILE_ACCESS,
        profileAccess: profileAccess
    }
}
export const setProfileDisplay = (profileDisplay) => {
    return {
        type: DISPLAY_PROFILE,
        profileDisplay: profileDisplay
    }
}

export const profileData = (user_id, user_token) => {
    return (dispatch) => {
        return fetch('/userprofile', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user_id: user_id,
                user_token: user_token
            })
        }).then((response) => (response.json()))
            .then((responseData) => {
                if (responseData.data) {
                    dispatch(setUserUpdateName(responseData.data.user_name));
                    dispatch(setUserUpdateEmail(responseData.data.user_email));
                    dispatch(setUserUpdateDob(responseData.data.user_dob));
                    dispatch(setUserUpdatePhone(responseData.data.user_phone));
                    dispatch(setUserUpdateGender(responseData.data.user_gender));
                }
        })
    }
}

export const profileUpdate = (
    user_id, user_token, user_name, 
    user_email, user_dob, 
    user_gender, user_phone
) => {
    return (dispatch) => {
        return fetch( '/update', {
            method: 'PUT',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                user_id: user_id,
                user_token: user_token,
                user_name: user_name,
                user_email: user_email,
                user_dob: user_dob,
                user_gender: user_gender,
                user_phone: user_phone 
            })
        }).then( (response) => (response.json()) )
        .then( (responseData) => {
            if(responseData.success){
                dispatch(setSnackMassage(responseData.success));
                dispatch(setSnackColor('success'));
                dispatch(setSnackOpen(true));
                dispatch(profileData(user_id, user_token));
                dispatch(LoginStore(user_name, user_email, user_dob, user_phone, user_gender))
            }
            else if (responseData.empty){
                dispatch(setSnackMassage(responseData.empty));
                dispatch(setSnackColor('warning'));
                dispatch(setSnackOpen(true));
                dispatch(profileData(user_id, user_token));
            }
            else {
                dispatch(setSnackMassage(responseData.error));
                dispatch(setSnackColor('error'));
                dispatch(setSnackOpen(true));
            }
        })
    }
}