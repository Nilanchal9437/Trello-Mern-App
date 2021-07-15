import { CARD_TITLE, CARD_BODY, CARD_COLOR, CARD_IMAGE,
     CREATE_CARD, LIST_INDEX, CARD_DELETE_INDEX, DELETE_CARD, 
     CARD_ID, CARD_UPDATE_ID} from '../../Constants/Card/CardConstants';


export const setCardTitle = (cardTitlte) => {
    return {
        type: CARD_TITLE,
        cardTitlte : cardTitlte,
    }
}

export const setCardBody = (cardBody) => {
    return {
        type: CARD_BODY,
        cardBody: cardBody,
    }
}

export const setCardColor = (cardColor) => {
    return {
        type: CARD_COLOR,
        cardColor: cardColor
    }
}

export const setCardImage = (cardImage) => {
    return { 
        type: CARD_IMAGE,
        cardImage : cardImage,
    }
}

export const setListIndex = (ListIndex) => {
    return { 
        type: LIST_INDEX,
        ListIndex : ListIndex,
    }
}

export const useCard = () => {
    return (dispatch) => {
        dispatch(MainCard());
        dispatch(setCardTitle(''));
        dispatch(setCardBody(''));
        dispatch(setCardColor(''));
        dispatch(setCardImage(''));
        dispatch(setListIndex(''));
    }
}

export const MainCard = () => {
    return {
        type: CREATE_CARD,
    }
}


export const setDeleteIndex = (cardDeleteIndex) => {
    return {
        type: CARD_DELETE_INDEX,
        cardDeleteIndex: cardDeleteIndex,
    }
}

export const deleteCard = () => {
    return {
        type: DELETE_CARD,
    }
}

export const cardIndexID = (cardCeateIndex) => {
    return {
        type: CARD_ID,
        cardCeateIndex: cardCeateIndex
    }
}

export const cardUpdateID = () => {
    return {
        type: CARD_UPDATE_ID
    }
}