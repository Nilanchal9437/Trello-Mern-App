import { setCardTitle, setCardBody, setCardColor, setCardImage, useCard} from '../../Actions/Card/CardAction';
import CardCreate from '../../Components/Card/CreateCard';
import {connect} from 'react-redux';
import { closeCard } from '../../Actions/Dilog/DilogAction';


const sendData = (dispatch) => ({
    titleCard: (cardTitlte) => {
         dispatch(setCardTitle(cardTitlte));
    },
    bodyCard: (cardBody) => {
         dispatch(setCardBody(cardBody));
    },
    colorCard: (cardColor) => {
         dispatch(setCardColor(cardColor));
    },
    imageCard: (cardImage) => {
         dispatch(setCardImage(cardImage));
    },
    CardNewCreate: () => {
         dispatch(useCard());
    },
    cardClose: (cardAccess) => {
         dispatch(closeCard(cardAccess));
    },
});

const reciveData = (state) => ({
    state: state,
});

export default connect(reciveData, sendData)(CardCreate);
