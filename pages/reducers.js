// reducers.js

import { combineReducers } from 'redux';

// Örnek bir reducer
const initialState = {
    trips: [],
};

const tripReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TRIP':
            return { ...state, trips: [...state.trips, action.payload] };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    trip: tripReducer,
    // Diğer reducer'ları buraya ekleyin
});

export default rootReducer;
