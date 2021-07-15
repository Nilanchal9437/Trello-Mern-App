import { connect } from "react-redux";
import UserProfile from '../../Components/Profile/ProfileComponent';
import {
    setUserUpdateName, setUserUpdateEmail,
    setUserUpdateDob, setUserUpdatePhone, 
    setUserUpdateGender, profileUpdate
} from '../../Actions/Profile/ProfileAction';

const sendData = (dispatch) => ({
    setName: (name) => {
        dispatch(setUserUpdateName(name));
    },
    setEmail: (email) => {
        dispatch(setUserUpdateEmail(email));
    },
    setDob: (dob) => {
        dispatch(setUserUpdateDob(dob));
    },
    setPhone: (phone) => {
        dispatch(setUserUpdatePhone(phone));
    },
    setGender: (gender) => {
        dispatch(setUserUpdateGender(gender));
    },
    updateProfile: (user_id, user_token, user_name, user_email, user_dob, user_gender, user_phone) => {
        dispatch(profileUpdate(user_id, user_token, user_name, user_email, user_dob, user_gender, user_phone));
    },
});

const reciveData = (state) => ({
    state: state
});

export default connect(reciveData, sendData)(UserProfile);