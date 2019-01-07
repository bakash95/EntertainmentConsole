import initialState from '../store/InitialState';
import actionTypes from '../actionTypes/actionTypes';

const trendingReducer = (state = initialState.trending, action) => {
    switch (action.type) {
        case actionTypes.GET_TRENDING:
            return action.payload.trending;
        default:
            return state;
    }
}

export default trendingReducer;