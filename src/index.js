import storeFactory from './store/index'
import {addNote, addUser} from './actions'

let initialState = { users: 'Jonathan', notes:'hello world'}

const store = storeFactory(initialState)

store.dispatch(
    addNote("first note")
)
//
// store.dispatch(
//     addUser("Christopher")
// )
//
// store.dispatch(
//     addUser("Fiona")
// )

// store.dispatch({
//     type: C.ADD_USER,
//     payload: "James"
// })
//
// store.dispatch({
//     type: C.ADD_NOTES,
//     payload: "Hi my name is James "
// })

// import {createStore} from 'redux'
//
// let initialState = { users: 'Jonathan', notes:'hello world'}
//
// const store = createStore(appReducers, initialState)
//
//
//
// console.log(`
//     initial state
//     =============
//     state : ${store.getState().users}
//     notes : ${store.getState().notes}
// `)
//
//
// store.dispatch({
//     type: C.ADD_USER,
//     payload: "James"
// })
//
// store.dispatch({
//     type: C.ADD_NOTES,
//     payload: "Hi my name is James "
// })
//
// console.log(`
//     new state
//     =============
//     state : ${store.getState().users}
//     notes : ${store.getState().notes}
// `)