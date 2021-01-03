import React from 'react'
import {connect} from "react-redux";
import {setBooks} from "../actions/books";
import '../app.css'
import App from "../components/App";

const mapStateToProps = ({books}) => {
    return {
        books: books.items,
        isReady: books.isReady
    }
}

const mapDispatchToProps = (dispatch) => (
    {
        setBooks: (books) => {
            return dispatch(setBooks(books))
        }
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
