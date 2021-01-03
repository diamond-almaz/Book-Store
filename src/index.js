import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import {Provider} from "react-redux";
import createStore from "./store";
import 'semantic-ui-css/semantic.min.css';

const store=createStore()
//
// setTimeout(()=>{
//     store.dispatch({type: 'SET_BOOKS', payload: [{id: 0, title: 'hello world'}]})
// },2000)

ReactDOM.render(<Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

