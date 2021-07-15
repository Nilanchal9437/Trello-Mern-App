import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import CreateList from './Containers/List/mainContainer';
import CreateNewTemplate from "./Containers/Template/createContainer";
import CreateBoard from './Containers/Template/boardContainer';
import CardUpdate from './Containers/update/cardUpdateContainer';
import CardCreate from './Containers/Card/cardContainer';
import homePage from './Containers/home/homeContainer';
import RegisterComp from './Containers/registration/registrationContainer';
import LoginComp from './Containers/login/loginContainer';
import Snack from './Containers/Snack/SnackContainer';
import UserProfile from './Containers/Profile/ProfileContainer';
import AppBarComponent from './Containers/App/AppContainer';



class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <AppBarComponent />
        <Snack />
        <CreateBoard />
        <CardCreate />
        <CardUpdate />
        <Route exact path='/' component={homePage} ></Route>
        <Route path='/PROFILE' component={UserProfile} ></Route>
        <Route path='/HOME' component={CreateNewTemplate} ></Route>
        <Route path='/LOGIN' component={LoginComp} ></Route>
        <Route path='/REGISTRATION' component={RegisterComp}></Route>
        <Route path='/LISTITEMS' component={CreateList} ></Route>
      </BrowserRouter>
    )
  }
}

export default App;