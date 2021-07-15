import homePage from '../../Components/home/home';
import {connect} from 'react-redux';
import { setLogin} from '../../Actions/API/apiAction';
import { setAppShow } from '../../Actions/App/AppAction';
import React from 'react';


export class Controller extends React.Component{
    render(){
        return(
            <homePage {...this.props} />
        )
    }
}


export const sendData = (dispatch) => ({
    setUserLogin: (loginAccess) => {
        dispatch(setLogin(loginAccess));
    },
    showApp: (AppBarAccess) => {
        dispatch(setAppShow(AppBarAccess));
    },
});

export const reciveData = (store) => ({
    store: store,
})


export default connect(reciveData, sendData)(homePage);