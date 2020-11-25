import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/nav/nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/Dialogs' render={ () => <Dialogs dialogs={props.dialogs} messages={props.messages}/> }/>
                    <Route path='/Profile' render={ () => <Profile posts={props.posts}/> }/>
                    <Route path='/Settings' render={ () => <Settings /> }/>
                    <Route path='/Music' render={ () => <Music /> }/>
                    <Route path='/News' render={ () => <News /> }/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;

