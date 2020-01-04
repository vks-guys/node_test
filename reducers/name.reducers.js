import * as nameActions from '../action-types/name.action.types';

/**
 * 
 */
const initialState = { name: "Vivek" };

/**
 * 
 * @param {*} state the current state of the function state
 * @param {*} action the action which caused this login reducer
 * 
 * @returns the new state.
 */

export default function nameReducer(state = initialState, action) {
    console.log("nameReducers", action)
    switch (action.type) {
        case nameActions.NAME_INIT:
            let obj = {
                ...state,
                type: action.type,
                data: action.payload
            }
            console.log("obj", obj);
            return obj;
        case nameActions.NAME_UPDATE:
            return {
                ...state,
                type: action.type,
                name: action.payload
            }
        default:
            return initialState;
    }
}