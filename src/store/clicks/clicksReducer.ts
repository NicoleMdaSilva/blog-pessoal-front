import { Action } from "./actions";

export type clickStates = {
    clicks: number;
};

const initialState = {
    clicks: 0
}

export const clicksReducer = (state: clickStates = initialState, action: Action) => {
    switch (action.type){
        case 'CHANGE_CLICKS':
            return { clicks: action.payload };
            break;
        default:{ 
            return state;
        }
    }
}