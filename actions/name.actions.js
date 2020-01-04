import * as nameTypes from '../action-types/name.action.types';
import axios from 'axios';

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


export const nameInit = () => async dispatch => {
    let posts = []
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        posts = await response.data.splice(0, 10)
        console.log("nameInit 1");
        dispatchAction(dispatch, nameTypes.NAME_INIT, posts);
    }
    catch (err) {
        console.log(err)
        console.log("nameInit 2");
        dispatchAction(dispatch, nameTypes.NAME_INIT, posts);
    }
    // console.log("nameInit 3");
    // dispatchAction(dispatch, nameTypes.NAME_INIT, posts);
};

export const nameUpdate = (payload) => async dispatch => {
    //console.log("nameUpdate", payload)
    dispatchAction(dispatch, nameTypes.NAME_UPDATE, payload);
};