import { connect } from "react-redux";
import CreateList from '../../Components/List/main';
import { setListTitle, setList, deleteList, setUpdateAccess, updateList } from '../../Actions/List/ListAction';
import { setListIndex, setDeleteIndex, deleteCard } from '../../Actions/Card/CardAction';
import { setDragListId, setDropListId, setCardDragId, setCardDropId, setTemporaryList, DNDrestore, setDataRestore } from '../../Actions/DND/DNDActions';
import { setCardTitle, setCardBody, setCardColor, setCardImage } from '../../Actions/Card/CardAction';
import { setAppHide } from '../../Actions/App/AppAction';
import { tempDisplay, tempIndex } from '../../Actions/Template/Action';
import { setTrelloUpdate } from '../../Actions/API/apiAction';
import { openCard, openUpdateCard, closeUpdateCard, closeCard, closeTemplate } from '../../Actions/Dilog/DilogAction';
import { setLocalAccess, setFullAccess } from '../../Actions/API/apiAction';
import React from "react";

export class Controller extends React.Component{
     render(){
          return (
               <CreateList {...this.props} />
          )
     }
}
export const sendData = (dispatch) => ({
     fullAccessSet: (fullAccess) => {
          dispatch(setFullAccess(fullAccess))
     },
     indexTemp: (frameIndex) => {
          dispatch(tempIndex(frameIndex));
     },
     hideApp: (AppBarAccess) => {
          dispatch(setAppHide(AppBarAccess));
     },
     localAccess: (user_token) => {
          dispatch(setLocalAccess(user_token));   
     },
     cardOpen: (cardAccess) => {
          dispatch(openCard(cardAccess));
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
     cardUpdateOpen: (cardUpdateAccess) => {
          dispatch(openUpdateCard(cardUpdateAccess));
     },
     dispTemp: (displayTemplate) => {
          dispatch(tempDisplay(displayTemplate));
     },
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
     titleList: (listTitle) => {
          dispatch(setListTitle(listTitle));
     },
     listCreate: () => {
          dispatch(setList());
     },
     indexList: (ListIndex) => {
          dispatch(setListIndex(ListIndex));
     },
     dragList: (listDragId) => {
          dispatch(setDragListId(listDragId));
     },
     dropList: (listDropId) => {
          dispatch(setDropListId(listDropId));
     },
     dragCard: (cardDragId) => {
          dispatch(setCardDragId(cardDragId));
     },
     dropCard: (cardDropId) => {
          dispatch(setCardDropId(cardDropId));
     },
     setTempoList: (temporaryList) => {
          dispatch(setTemporaryList(temporaryList));
     },
     dndRestore: () => {
          dispatch(DNDrestore());
     },
     setRestoreData: () => {
          dispatch(setDataRestore());
     },
     listDelete: () => {
          dispatch(deleteList());
     },
     cardItemDeleteIndex: (cardDeleteIndex) => {
          dispatch(setDeleteIndex(cardDeleteIndex));
     },
     cardDelete: () => {
          dispatch(deleteCard());
     },
     updateListAccess: (listUpdateAccess) => {
          dispatch(setUpdateAccess(listUpdateAccess));
     },
     listUpdate: () => {
          dispatch(updateList());
     },
     updateTrello: (user_email, user_id, user_token, tempList) => {
          dispatch(setTrelloUpdate(user_email, user_id, user_token, tempList));
     },
});

export const reciveData = (store) => ({
     store: store,
});

export default connect(reciveData, sendData)(CreateList);
