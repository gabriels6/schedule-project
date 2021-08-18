const initialState = {
    DailyReviews: []
}

export default function reducer(state = initialState,action){
    switch ( action.type ){
        case 'SAVE_DAILY_REVIEWS':
            return { 
                    ...state,
                    DailyReviews:action.payload.DailyReviews
                }
        default:
            return state;
    }
}