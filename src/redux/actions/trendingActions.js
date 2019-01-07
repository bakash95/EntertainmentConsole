import actionTypes from "../actionTypes/actionTypes";
import apiCall from '../../services/apiCall';

export const getTrending = (trending) => {
    return {
        type: actionTypes.GET_TRENDING,
        payload: { trending, }
    }
}

export const getAllTrending = () => {
    return (dispatch) => {
        dispatch(trendingApiCallStart());
        apiCall('trending').then((data) => {
            dispatch(trendingApiCallSuccess()); dispatch(getTrending(data));
        }).catch((error) => { dispatch(trendingApiCallFailure()); });
    }
}

export const trendingApiCallStart = () => {
    return {
        type: actionTypes.GET_Trending_AJAX_START,
    }
}

export const trendingApiCallSuccess = () => {
    return {
        type: actionTypes.GET_Trending_AJAX_SUCCESS,
    }
}

export const trendingApiCallFailure = () => {
    return {
        type: actionTypes.GET_Trending_AJAX_FAILURE,
    }
}