export function saveUser(Username){
    return{
        type:'SAVE_USER',
        payload: {
            Username:Username
        }
    }
}
