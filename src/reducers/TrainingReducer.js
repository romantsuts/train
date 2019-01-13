import {
    CREATE_PROGRAMM,
    CREATE_DAY,
    FETCH_SUCCESS,
    DELETE_ITEM,
    CHOOSE_PROGRAMM,
    PROGRAMM_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    programmName: '',
    days: [],
    programms: [],
    exercises: [],
    weight: null,
    repeats: null
}


export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CREATE_DAY:
            return {...state, days: action.payload}   
        case CREATE_PROGRAMM:
            return {...state, programmName: action.payload }   
        case CHOOSE_PROGRAMM:
            return {...state, programms: [...state.programms, action.data] }
        case PROGRAMM_SAVE_SUCCESS:
            return INITIAL_STATE;
        case DELETE_ITEM:
            return { ...state, days: [...state.days.slice(0, action.index), ...state.days.slice(action.index + 1)]
            };
        default:
            return state;
    }
}

            
            