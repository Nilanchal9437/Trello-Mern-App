import {
    UPDATE_USER_NAME, UPDATE_USER_DOB,
    UPDATE_USER_EMAIL, UPDATE_USER_GENDER,
    UPDATE_USER_PHONE, PROFILE_ACCESS,
    DISPLAY_PROFILE
} from '../../Constants/Profile/ProfileConstant';

const Intial = {
    name: '',
    email: '',
    dob: '',
    gender: '',
    phone: '',
    profileAccess: false,
    profileDisplay: false
}

const userProfile = (state = Intial, action) => {
    switch (action.type) {
        case UPDATE_USER_NAME:
            return {
                ...state,
                name : action.name
            }
        case UPDATE_USER_DOB:
            return {
                ...state,
                dob : action.dob
            }
        case UPDATE_USER_EMAIL:
            return {
                ...state,
                email : action.email
            }
        case UPDATE_USER_GENDER:
            return {
                ...state,
                gender : action.gender
            }
        case UPDATE_USER_PHONE:
            return {
                ...state,
                phone : action.phone
            }
        case PROFILE_ACCESS:
            return {
                ...state,
                profileAccess : action.profileAccess
            }
        case DISPLAY_PROFILE:
            return {
                ...state,
                profileDisplay: action.profileDisplay
            }
        default:
            return state;
    }
};

export default userProfile;