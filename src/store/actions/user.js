export function saveUser(Username,User_id){
    return{
        type:'SAVE_USER',
        payload: {
            Username:Username,
            User_id:User_id
        }
    }
}
