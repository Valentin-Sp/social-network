import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, massage: 'Hi, how are you?', likesCount: 12},
    {id: 2, massage: 'It?\'s my first massage', likesCount: 11},
    {id: 2, massage: 'Bla Bla', likesCount: 11},
    {id: 2, massage: 'Da da', likesCount: 11}
]

let dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valera'}
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is you learning?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'How is you learning?'},
]

ReactDOM.render(
    <React.StrictMode>
        <App posts={posts} dialogs={dialogs} messages={messages}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
