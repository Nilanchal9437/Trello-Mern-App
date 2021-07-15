import { setTamplateName, setTemplateDesign, useTemplate, tempDisplay, tempIndex, deleteTemplate, setRecent, removeRecent } from '../../Actions/Template/Action';
import { openTemplate, closeUpdateCard, closeCard, closeTemplate } from '../../Actions/Dilog/DilogAction';
import { connect } from "react-redux";
import CreateNewTemplate from '../../Components/Template/Temp';
import { setListTitle } from '../../Actions/List/ListAction';
import { setTemporaryList, setDataRestore } from '../../Actions/DND/DNDActions';
import { setAppShow } from '../../Actions/App/AppAction';
import { cardIndexID } from '../../Actions/Card/CardAction';
import { setLocalAccess, setFullAccess, setTrelloUpdate } from '../../Actions/API/apiAction';
import React, { Component } from 'react';

export class Controller extends Component {
    render() {
        return (
            <CreateNewTemplate {...this.props} />
        )
    }
}

export const sendData = (dispatch) => ({
    recentSet: () => {
        dispatch(setRecent())
    },
    recentItemRemove: () => {
        dispatch(removeRecent())
    },
    fullAccessSet: (fullAccess) => {
        dispatch(setFullAccess(fullAccess))
    },
    localAccess: (user_token) => {
        dispatch(setLocalAccess(user_token));
    },
    updateTrello: (user_email, user_id, user_token, tempList) => {
        dispatch(setTrelloUpdate(user_email, user_id, user_token, tempList))
    },
    templateClose: (tempAccess) => {
        dispatch(closeTemplate(tempAccess));
    },
    cardClose: (cardAccess) => {
        dispatch(closeCard(cardAccess));
    },
    cardUpdateClose: (cardUpdateAccess) => {
        dispatch(closeUpdateCard(cardUpdateAccess));
    },
    templateOpen: (tempAccess) => {
        dispatch(openTemplate(tempAccess))
    },
    setTempTitle: (tempName) => {
        dispatch(setTamplateName(tempName));
    },
    setTempDesign: (tempID) => {
        dispatch(setTemplateDesign(tempID));
    },
    useTemp: () => {
        dispatch(useTemplate());
    },
    dispTemp: (displayTemplate) => {
        dispatch(tempDisplay(displayTemplate));
    },
    indexTemp: (frameIndex) => {
        dispatch(tempIndex(frameIndex));
    },
    titleList: (listTitle) => {
        dispatch(setListTitle(listTitle));
    },
    setTempoList: (temporaryList) => {
        dispatch(setTemporaryList(temporaryList));
    },
    setRestoreData: () => {
        dispatch(setDataRestore());
    },
    templateDelete: () => {
        dispatch(deleteTemplate());
    },
    showApp: (AppBarAccess) => {
        dispatch(setAppShow(AppBarAccess));
    },
    indexCardID: (cardCeateIndex) => {
        dispatch(cardIndexID(cardCeateIndex));
    }
});

export const reciveData = (store) => ({
    store: store,
});

export default connect(reciveData, sendData)(CreateNewTemplate);
