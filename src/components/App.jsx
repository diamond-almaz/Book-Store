import React from 'react'
import axios from 'axios'
import MenuComponent from "./MenuComponent";
import {Container, Card} from "semantic-ui-react";
import BookCard from "./BookCard";
import '../app.css'
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
                <MenuComponent/>
                <Card.Group itemsPerRow={4}>

                        {!isReady ? 'Загрузка...' : books.map((book,i) => <BookCard key={i} {...book}/>)}
                </Card.Group>
            </Container>)
    }
}


export default App;
