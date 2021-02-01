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

const App = (props) => {
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/Dialogs'
                           render={() => <Dialogs store={props.store} />}/>
                    <Route path='/Profile'
                           render={() => <Profile
                               profilePage={props.state.profilePage}
                               dispatch={props.dispatch} /> }
                    />
                    <Route path='/Settings' render={() => <Settings/>}/>
                    <Route path='/Music' render={() => <Music/>}/>
                    <Route path='/News' render={() => <News/>}/>
                </div>
            </div>

    );
};

export default App;