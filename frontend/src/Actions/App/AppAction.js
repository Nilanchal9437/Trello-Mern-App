import {APP_BAR_SHOW, APP_BAR_HIDE } from '../../Constants/App/AppConstant';

export const setAppShow = (AppBarAccess) => {
    return {
        type: APP_BAR_SHOW,
        AppBarAccess: AppBarAccess
    }
}

export const setAppHide = (AppBarAccess) => {
    return {
        type: APP_BAR_HIDE,
        AppBarAccess: AppBarAccess
    }
}