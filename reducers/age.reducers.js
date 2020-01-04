import * as ageActions from '../action-types/age.action.types';

/**
 * 
 */
const initialState = { age: 24 };

/**
 * 
 * @param {*} state the current state of the function state
 * @param {*} action the action which caused this login reducer
 * 
 * @returns the new state.
 */

export default function ageReducer(state, action) {
    switch (action.type) {
        case ageActions.AGE_INIT:
            return {
                type: action.type
            }
        case ageActions.AGE_UPDATE:
            return {
                ...state,
                type: action.type,
                age: action.payload
            }
        default:
            return initialState;
    }
}