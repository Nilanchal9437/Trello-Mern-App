import { tempDisplay, tempIndex } from '../../Actions/Template/Action';
import { setLogOut, setLogin, setRegistration, setFullAccess } from "../../Actions/API/apiAction";
import { profileData, setProfileDisplay } from '../../Actions/Profile/ProfileAction';
import AppBarComponent from '../../Components/App/AppBar';
import { connect } from 'react-redux';


const sendData = (dispatch) => ({
  fullAccessSet: (fullAccess) => {
    dispatch(setFullAccess(fullAccess))
  },
  dispTemp: (displayTemplate) => {
    dispatch(tempDisplay(displayTemplate));
  },
  indexTemp: (frameIndex) => {
    dispatch(tempIndex(frameIndex));
  },
  setUserRegister: (registrationAccess) => {
    dispatch(setRegistration(registrationAccess));
  },
  setUserLogout: (user_email, user_id, user_token, tempList) => {
    dispatch(setLogOut(user_email, user_id, user_token, tempList));
  },
  setUserLogin: (loginAccess) => {
    dispatch(setLogin(loginAccess));
  },
  setProfile: (user_id, user_token) => {
    dispatch(profileData(user_id, user_token));
  },
  dispProfile: (profileDisplay) => {
    dispatch(setProfileDisplay(profileDisplay));
  },
})

const reciveData = (state) => ({
  state: state,
})


export default connect(reciveData, sendData)(AppBarComponent);