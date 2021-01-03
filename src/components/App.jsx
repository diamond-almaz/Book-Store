import React from 'react'
import axios from 'axios'
import MenuComponent from "./MenuComponent";
import {Container, Card} from "semantic-ui-react";
import BookCard from "../container/BookCard";
import '../app.css'
import Filter from "./Filter";
import {addBooks, removeBooks} from "../actions/cart";
// import App from '../container/App'



class App extends React.Component {

    componentWillMount() {
        axios.get('/books.json').then(({data}) => {
            this.props.setBooks(data)
        })
    }

    render() {
        const {books, isReady} = this.props;
        return (
            <Container>
                <MenuComponent removeBooks={this.props.removeBooks} items={this.props.cartItems} count={this.props.count} totalPrice={this.props.totalPrice}/>
                <Filter  searchQuery={this.props.searchQuery} setQuery={this.props.setQuery} setFilter={this.props.setFilter} filterBy={this.props.filterBy}/>
                <Card.Group itemsPerRow={4}>

                        {!isReady ? 'Загрузка...' : books.map((book,i) => <BookCard addBooks={()=>this.props.addBooks(book)} key={i} {...book}/>)}
                </Card.Group>
            </Container>)
    }
}


export default App;
