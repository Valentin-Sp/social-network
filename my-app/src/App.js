import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/nav/nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/Dialogs' component={Dialogs}/>
                    <Route path='/Profile' component={Profile}/>
                    {/*<Route path='/Dialogs' component={Dialogs}/>*/}
                    {/*<Route path='/Profile' component={Profile}/>*/}
                    {/*<Route path='/Profile' component={Profile}/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;

