import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import ColorCode from '../Reducers/Color/colorReducer';
import CreateTemplates from '../Reducers/Template/CreateTemplate';
import DilogBox from '../Reducers/Dilog/DilogReducer';
import AppBarReducer from '../Reducers/App/AppReducer';
import ApiData from '../Reducers/API/ApiReducer';
import LoginReducer from '../Reducers/log/loginReducer';
import SnackReducer from '../Reducers/Snack/SnackReducer';
import userProfile from '../Reducers/Profile/ProfileReducer';

export const root = combineReducers({
    ApiData,
    AppBarReducer,
    LoginReducer,
    SnackReducer,
    userProfile,
    CreateTemplates,
    ColorCode,
    DilogBox,
});

const store = createStore(root, applyMiddleware(thunk));

export default store;