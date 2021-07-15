import { CARD_UPDATE, UPDATE_CARD_ACCESS } from '../../Constants/Card/CardConstants';


export const setCardUpdateAccess = (cardUpdateAccess) => {
    return {
        type: UPDATE_CARD_ACCESS,
        cardUpdateAccess: cardUpdateAccess,
    }
}


export const updateCard = () => {
    return {
        type: CARD_UPDATE,
    }
}