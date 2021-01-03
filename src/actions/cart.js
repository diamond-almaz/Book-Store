export const addBooks=(book)=>({
    type: 'ADD_BOOKS',
    payload: book
})

export const removeBooks=(id)=>({
    type: 'REMOVE_BOOKS',
    payload: id
})