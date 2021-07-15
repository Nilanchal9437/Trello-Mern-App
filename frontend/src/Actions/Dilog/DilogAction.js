import {  OPEN_DILOG, OPEN_CARD, OPEN_TEMPLATE, OPEN_UPDATE_CARD,
    CLOSE_CARD, CLOSE_TEMPLATE, CLOSE_UPDATE_CARD, CLOSE_DILOG
} from '../../Constants/Dilog/DilogConstant';

export const openDilog = (Open) => {
    return {
        type:OPEN_DILOG,
        Open:Open,
    }
}

export const closeDilog = (Open) => {
    return {
        type:CLOSE_DILOG,
        Open:Open,
    }
}

export const openTemplate = (tempAccess) => {
    return {
        type : OPEN_TEMPLATE,
        tempAccess: tempAccess
    }
}

export const closeTemplate = (tempAccess) => {
    return {
        type : CLOSE_TEMPLATE,
        tempAccess: tempAccess
    }
}


export const openCard = (cardAccess) => {
    return {
        type : OPEN_CARD,
        cardAccess: cardAccess
    }
}

export const closeCard = (cardAccess) => {
    return {
        type : CLOSE_CARD,
        cardAccess : cardAccess
    }
}

export const openUpdateCard = (cardUpdateAccess) => {
    return {
        type: OPEN_UPDATE_CARD,
        cardUpdateAccess: cardUpdateAccess
    }
}

export const closeUpdateCard = (cardUpdateAccess) => {
    return {
        type: CLOSE_UPDATE_CARD,
        cardUpdateAccess: cardUpdateAccess
    }
}

