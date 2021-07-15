import {SNACK_CLOSE, SNACK_OPEN, SNACK_MASSAGE, SNACK_COLOR} from '../../Constants/Snack/SnackConstant';

export const setSnackOpen = (SnackAccess) => {
    return {
        type: SNACK_OPEN,
        SnackAccess:SnackAccess
    }
}

export const setSnackClose = (SnackAccess) => {
    return {
        type: SNACK_CLOSE,
        SnackAccess: SnackAccess
    }
}

export const setSnackMassage = (SnackMassage) => {
    return {
        type: SNACK_MASSAGE,
        SnackMassage: SnackMassage
    }
}

export const setSnackColor = (SnackColor) => {
    return { 
        type: SNACK_COLOR,
        SnackColor: SnackColor
    }
}