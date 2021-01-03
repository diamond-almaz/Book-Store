const initialState = {
    items: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BOOKS': {
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        }
        case  'REMOVE_BOOKS': {
            return {
                ...state,
                items: state.items.filter(i => i.id != action.payload)
            }
        }

        default:
            return state;
    }

}
