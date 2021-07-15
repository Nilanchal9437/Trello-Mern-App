import { APP_BAR_HIDE, APP_BAR_SHOW } from '../../Constants/App/AppConstant';


const Intial = {
    AppBarAccess : true,
}

const AppBarReducer = ( state = Intial, action) => {
    switch(action.type){
        case APP_BAR_SHOW:
            return {
                ...state,
                AppBarAccess : action.AppBarAccess
            }
        case APP_BAR_HIDE:
            return {
                ...state,
                AppBarAccess : action.AppBarAccess
            }
        default:
            return state;
    }
}

export default AppBarReducer;