import { setTamplateName, setTemplateDesign, useTemplate } from '../../Actions/Template/Action';
import { closeTemplate } from '../../Actions/Dilog/DilogAction';
import { connect } from "react-redux";
import CreateBoard from '../../Components/Template/CreateBoard';
import {setTrelloUpdate} from '../../Actions/API/apiAction';

const sendData = (dispatch) => ({
    updateTrello: (user_email, user_id, user_token, tempList) => {
        dispatch(setTrelloUpdate(user_email, user_id, user_token, tempList))
    },
    setTempTitle : (tempName) => {
        dispatch(setTamplateName(tempName));
    },
    setTempDesign : (tempID) => {
        dispatch(setTemplateDesign(tempID));
    },
    useTemp : () => {
        dispatch(useTemplate());
    },
    templateClose : (tempAccess) => {
        dispatch(closeTemplate(tempAccess));
    },
});

const reciveData = (state) => ({
    state: state,
});

export default connect(reciveData, sendData)(CreateBoard);
