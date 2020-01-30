import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';
import './pages/homepage/homepage.styles.scss';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInUpPage from "./pages/sign-in-up/sign-in-up.component";
import {auth} from "./firebase/firebase.utils";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({currentUser: user});
            //console.log(this.state.currentUser);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route path='/signin' component={SignInUpPage}/>
                </Switch>
            </div>
        );
    }
}

export default App;
