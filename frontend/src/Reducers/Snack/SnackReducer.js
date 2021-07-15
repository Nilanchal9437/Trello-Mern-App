import {SNACK_CLOSE, SNACK_OPEN, SNACK_MASSAGE, SNACK_COLOR} from '../../Constants/Snack/SnackConstant';


const SnackData = {
    SnackAccess : false,
    SnackColor : '',
    SnackMassage: ''
};

const SnackReducer = (state = SnackData, action) => {
    switch(action.type){
        case SNACK_OPEN:
            return {
                ...state,
                SnackAccess: action.SnackAccess
            }
        case SNACK_CLOSE:
            return {
                ...state,
                SnackAccess: action.SnackAccess
            }
        case SNACK_COLOR:
            return {
                ...state,
                SnackColor : action.SnackColor
            }
        case SNACK_MASSAGE:
            return {
                ...state,
                SnackMassage: action.SnackMassage
            }
        default:
            return state;
    }
};

export default SnackReducer;