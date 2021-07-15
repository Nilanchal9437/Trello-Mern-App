import { connect } from 'react-redux';
import { setSnackOpen, setSnackClose, setSnackMassage, setSnackColor} from '../../Actions/Snack/SnackAction';
import Snack from '../../Components/Snack/SnackComponent';


const sendData = (dispatch) => ({
    snackOpen: (SnackAccess) => {
        dispatch(setSnackOpen(SnackAccess));
    },
    snackClose: (SnackAccess) => {
        dispatch(setSnackClose(SnackAccess));
    },
    snackBarMassage: (SnackMassage) => {
        dispatch(setSnackMassage(SnackMassage));
    },
    snackBarColor: (SnackColor) => {
        dispatch(setSnackColor(SnackColor));
    },
});

const reciveData = (state) => ({
    state: state
});

export default connect(reciveData, sendData)(Snack);
