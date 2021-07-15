import { OPEN_DILOG, OPEN_CARD, OPEN_TEMPLATE, OPEN_UPDATE_CARD,
    CLOSE_CARD, CLOSE_TEMPLATE, CLOSE_UPDATE_CARD, CLOSE_DILOG
} from '../../Constants/Dilog/DilogConstant';

const DilogData = {
    Open: false,
    tempAccess: false,
    cardUpdateAccess: false,
    cardAccess: false
}

export default function DilogBox(state = DilogData, action){
    switch(action.type){
        case OPEN_DILOG:
            return {
                ...state,
                Open : action.Open
            }
        case CLOSE_DILOG:
            return {
                ...state,
                Open : action.Open
            }
        case OPEN_TEMPLATE:
            return {
                ...state,
                tempAccess : action.tempAccess
            }
        case CLOSE_TEMPLATE:
            return {
                ...state,
                tempAccess : action.tempAccess
            }
        case OPEN_CARD:
            return {
                ...state,
                cardAccess: action.cardAccess
            }
        case CLOSE_CARD:
            return {
                ...state,
                cardAccess: action.cardAccess
            }
        case OPEN_UPDATE_CARD:
            return {
                ...state,
                cardUpdateAccess: action.cardUpdateAccess
            }
        case CLOSE_UPDATE_CARD:
            return {
                ...state,
                cardUpdateAccess: action.cardUpdateAccess
            }
        default:
            return state;
    }
}