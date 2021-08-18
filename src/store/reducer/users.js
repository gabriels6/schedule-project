const initialState = {
    user: {
        Username:'',
        User_id:''
    }
}

export default function reducer(state = initialState,action){
    switch( action.type ){
        case 'SAVE_USER':
            return{...state,user:{
                Username:action.payload.Username,
                User_id:action.payload.User_id
            }};

        default:
            return state;
    }
}