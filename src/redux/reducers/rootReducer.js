import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import ajaxCallsReducer from './ajaxCallsReducer';
import trendingReducer from './trendingReducer';

const rootReducer = combineReducers({
    posts: postsReducer,
    authors: trendingReducer,
    ajaxCalls: ajaxCallsReducer,
});

export default rootReducer;