import C from './constants'

export function addNote(note){
    return {
        type: C.ADD_NOTES,
        payload: note
    }
}

export function addUser(user){
    return{
        type: C.ADD_USER,
        payload: user
    }
}

// export const randomNumber = () => (dispatch, getState) => {
//
//     if (!getState().addUser()){
//         dispatch({
//             type: C.ADD_USER
//         })
//     }
//     dispatch({
//         type: C.ADD_NOTES
//     })
//
//     setTimeout(()=> {
//         type: C.ADD_NOTES
//     }, 1500)
// }