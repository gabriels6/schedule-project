const initialState = {
    user: {
        Username
    }
}

export default function reducer(state = initialState,action){
    switch( action.type ){
        case 'SAVE_USER':
            return{...state,user:{Username:action.payload}};

        default:
            return state;
    }
}