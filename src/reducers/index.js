import { combineReducers } from 'redux';
import { addFeatureReducer } from './addFeature';
import { removeFeatureReducer } from './removeFeature';

export const rootReducer = combineReducers({
    addFeatureReducer,
    removeFeatureReducer
});