export const setFilter=(filter)=>{
    return {
        type: 'SET_FILTER',
        payload: filter
    }
}

export const setQuery=(value)=>{
    return {
        type: 'SET_QUERY',
        payload: value
    }
}