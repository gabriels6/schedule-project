export function saveDailyReviews(DailyReviews){
    return {
        type: 'SAVE_DAILY_REVIEWS',
        payload: {
            DailyReviews: DailyReviews
        }
    }
}
