import {Actions} from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';

import {
    CREATE_DAY,
    CHOOSE_PROGRAMM,
    DELETE_ITEM,
    CREATE_PROGRAMM,
    PROGRAMM_SAVE_SUCCESS
} from './types';

export const deleteItem = (index) => {
    return {
        type: DELETE_ITEM,
        index: index
    }
}

export const programmCreate = (name) => {
    return {
        type: CREATE_PROGRAMM,
        payload: name
    }
}
    
export const createDays = (days) => {
    return (dispatch) => {
        dispatch({type: CREATE_DAY, payload: days})
        Actions.pop();
    }
}

export const saveData = (name, data) => {
    return (dispatch) => {
        const key = name.replace(" ", "_");
        const obj = {name, days: data}
        const val = JSON.stringify(obj);
        AsyncStorage.setItem(`programm_${key}`, val)
        .then(() => {
            dispatch({type: PROGRAMM_SAVE_SUCCESS})
            Actions.programm({type: 'reset'});
        });
        
    }
}

export const fetchData = () => {
    return (dispatch) => {
        AsyncStorage.getAllKeys((err, keys) => {
            AsyncStorage.multiGet(keys, (err, stores) => {
                stores.map((result, i, store) => {
                    const val = JSON.parse(store[i][1])
                    const key = store[i][0]
                    dispatch({type: CHOOSE_PROGRAMM, data: val})
                });
            });
        });
    }
}


