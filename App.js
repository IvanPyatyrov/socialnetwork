import React, {Component, Suspense} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/login/Login";
import {connect} from "react-redux";
import {Route, withRouter} from "react-router-dom";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";
import {compose} from "redux";
import {withSuspense} from "./hoc/withSuspense";

//import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

//import ProfileContainer from "./components/Profile/ProfileContainer";

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path="/Dialogs" render={withSuspense(DialogsContainer)}/>
                    <Route path="/Profile/:userId?" render={withSuspense(ProfileContainer)}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/login" render={() => <LoginPage/>}/>
                    <Route path="/News" render={() => <News/>}/>
                    <Route path="/Music" render={() => <Music/>}/>
                    <Route path="/Settings" render={() => <Settings/>}/>
                </div>
            </div>
        )

    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
