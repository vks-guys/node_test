import * as ageTypes from '../action-types/age.action.types';

/**
 * 
 * @param {*} dispatch 
 * @param {*} type 
 * @param {*} user 
 * @param {*} users 
 * @param {*} error 
 * @param {*} message 
 * @param {*} recordsCount
 * @param {*} payload
 */
const dispatchAction = (dispatch, type, payload) => {
    dispatch({
        type,
        payload
    });
};


export const ageInit = () => async dispatch => {
    dispatchAction(dispatch, ageTypes.AGE_INIT, null);
};

export const ageUpdate = (payload) => async dispatch => {
    dispatchAction(dispatch, ageTypes.AGE_UPDATE, payload);
};