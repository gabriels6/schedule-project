import {combineReducers} from 'redux';
import users from './users';
import notes from './notes';
import dailyReviews from './daily-reviews';

export default combineReducers({
    users, 
    notes,
    dailyReviews
});