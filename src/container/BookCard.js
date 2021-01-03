import React from 'react'
import {connect} from "react-redux";
import {setBooks} from "../actions/books";
import '../app.css'
import App from "../components/App";
import orderBy from 'lodash/orderBy'
import {setFilter, setQuery} from "../actions/filter";
import {addBooks, removeBooks} from "../actions/cart";
import BookCard from "../components/BookCard";


const mapStateToProps = ({cart},{id}) => {
    return {
        addedCount: cart.items.reduce((count,book)=>count+(book.id==id?1:0),0)
    }
}

export default connect(mapStateToProps, {})(BookCard);
