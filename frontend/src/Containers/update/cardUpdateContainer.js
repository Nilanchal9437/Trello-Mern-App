import { closeUpdateCard } from '../../Actions/Dilog/DilogAction';
import { setCardTitle, setCardBody, setCardColor, setCardImage } from '../../Actions/Card/CardAction';
import { connect } from "react-redux";
import CardUpdate from '../../Components/update/UpdateCard';
import { updateCard } from '../../Actions/update/Action';

const sendData = (dispatch) => ({
    titleCard : (cardTitlte) => {
        dispatch(setCardTitle(cardTitlte));
    },
    bodyCard : (cardBody) => {
        dispatch(setCardBody(cardBody));
    },
    colorCard : (cardColor) => {
        dispatch(setCardColor(cardColor));
    },
    imageCard : (cardImage) => {
        dispatch(setCardImage(cardImage));
    },
    cardUpdate : () => {
        dispatch(updateCard());
    },
    cardUpdateClose: (cardUpdateAccess) => {
        dispatch(closeUpdateCard(cardUpdateAccess));
    },
});

const reciveData = (state) => ({
    state: state,
});

export default connect(reciveData, sendData)(CardUpdate);