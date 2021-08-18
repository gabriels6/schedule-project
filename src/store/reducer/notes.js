const initialState = {
    notes: []
}

export default function reducer(state = initialState,action){
    switch( action.type ){
        case 'SAVE_NOTE':
            return{...state,notes: []};

        default:
            return state;
    }
}