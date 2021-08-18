function saveNotes(Notes){
    return {
        type:'SAVE_NOTE',
        payload: {
            Notes:Notes
        }
    }
}

const functions = {
    saveNotes
}

export default functions