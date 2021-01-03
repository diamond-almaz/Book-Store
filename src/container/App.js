import React from 'react'
import {connect} from "react-redux";
import {setBooks} from "../actions/books";
import '../app.css'
import App from "../components/App";
import orderBy from 'lodash/orderBy'
import {setFilter, setQuery} from "../actions/filter";


const sortBy=(state,filter)=>{
    switch (filter) {
        case 'all':
            return state
        case 'price_high':
            return orderBy(state, 'price', 'desc')
        case 'price_low':
            return orderBy(state,'price', 'asc')
        case 'author':
            return orderBy(state, 'author', 'asc')
        default:
            return state
    }
}

const mapStateToProps = ({books,filter}) => {
    return {
        books: sortBy(books.items,filter.filterBy),
        isReady: books.isReady,
        filterBy: filter.filterBy,
        searchQuery: filter.searchQuery
    }
}

const mapDispatchToProps = (dispatch) => (
    {
        setBooks: (books) => {
            return dispatch(setBooks(books))
        },
        setFilter: (filter)=>{
            return dispatch(setFilter(filter))
        },
        setQuery: (value)=>{
            return dispatch(setQuery(value))
        }
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
