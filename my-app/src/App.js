import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/nav/nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path='/dialogs'
                       render={() => <DialogsContainer/>}/>
                <Route path='/profile'
                       render={() => <Profile/>}/>
                <Route path='/users'
                       render={() => <UsersContainer />}/>
                <Route path='/Settings' render={() => <Settings/>}/>
                <Route path='/Music' render={() => <Music/>}/>
                <Route path='/News' render={() => <News/>}/>
            </div>
        </div>

    );
};

export default App;