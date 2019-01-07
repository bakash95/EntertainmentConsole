import initialState from '../store/InitialState';
import actionTypes from '../actionTypes/actionTypes';

const ajaxCallsReducer = (state = initialState.ajaxCalls, action) => {
    switch (action.type) {
        case actionTypes.GET_POSTS_AJAX_START:
            return {
                ...state,
                getAllPosts: {
                    loading: true,
                    hasError: false,
                },
            };

        case actionTypes.GET_POSTS_AJAX_SUCCESS:
            return {
                ...state,
                getAllPosts: {
                    loading: false,
                    hasError: false,
                },
            };

        case actionTypes.GET_POSTS_AJAX_FAILURE:
            return {
                ...state,
                getAllPosts: {
                    loading: false,
                    hasError: true,
                },
            };

        case actionTypes.GET_TRENDING_AJAX_START:
            return {
                ...state,
                getAllTrending: {
                    loading: true,
                    hasError: false,
                },
            };

        case actionTypes.GET_TRENDING_AJAX_SUCCESS:
            return {
                ...state,
                getAllTrending: {
                    loading: false,
                    hasError: false,
                },
            };

        case actionTypes.GET_TRENDING_AJAX_FAILURE:
            return {
                ...state,
                getAllTrending: {
                    loading: false,
                    hasError: true,
                },
            };

        default:
            return state;
    }
}

export default ajaxCallsReducer;