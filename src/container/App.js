import React from 'react'
import {connect} from "react-redux";
import {setBooks} from "../actions/books";
import '../app.css'
import App from "../components/App";
import orderBy from 'lodash/orderBy'
import {setFilter, setQuery} from "../actions/filter";
import {addBooks, removeBooks} from "../actions/cart";
import uniqBy from 'lodash/uniqBy'


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

const filterBooks=(books, searchQuery)=>{
    return books.filter(i=> i.title.toLowerCase().indexOf(searchQuery.toLowerCase())>=0 ||
        i.author.toLowerCase().indexOf(searchQuery.toLowerCase())>=0
    )
}

const searchBooks=(state,filter,searchQuery)=>{
    return filterBooks(sortBy(state,filter),searchQuery)
}

const mapStateToProps = ({books,filter,cart}) => {
    return {
        books: books.items ? searchBooks(books.items,filter.filterBy,filter.searchQuery) : books.items,
        isReady: books.isReady,
        filterBy: filter.filterBy,
        searchQuery: filter.searchQuery,
        totalPrice: cart.items.reduce((total,bookInfo)=>total+bookInfo.price,0),
        count: cart.items.length,
        cartItems: uniqBy(cart.items,o=>o.id)
    }
}

// const mapDispatchToProps = (dispatch) => (
//     {
//         setBooks: (books) => {
//             return dispatch(setBooks(books))
//         },
//         setFilter: (filter)=>{
//             return dispatch(setFilter(filter))
//         },
//         setQuery: (value)=>{
//             return dispatch(setQuery(value))
//         }
//     }
// )

export default connect(mapStateToProps, {setBooks,setFilter,setQuery,addBooks,removeBooks})(App);
