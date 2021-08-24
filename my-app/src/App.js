import React from "react";
import "./App.css";
import Navbar from "./components/nav/nav";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <HeaderContainer />
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path='/dialogs'
                       render={() => <DialogsContainer/> } />

                <Route path='/profile/:userId?'
                       render={() => <ProfileContainer/> } />

                <Route path='/users'
                       render={() => <UsersContainer /> } />

                <Route path='/Settings' render={ () => <Settings/>}/>
                <Route path='/Music' render={ () => <Music/>}/>
                <Route path='/News' render={ () => <News/>}/>
                <Route path='/login'
                       render={ () => <LoginPage />}/>
            </div>
        </div>

    );
};

export default App;