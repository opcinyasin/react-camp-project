import React, {Component} from 'react';
import {Container, Menu} from 'semantic-ui-react'
import CartSummary from "./CartSummary";
import SignOut from "./SignOut";
import SignIn from "./SignIn";

class Navi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: true
        };
        this.handleSignOut = this.handleSignOut.bind(this)
    }

    handleSignOut() {
        this.setState({isAuthenticated: false})
    }

    render() {
        return (
            <div>
                <Menu inverted fixed="top">
                    <Container>
                        <Menu.Item
                            name='home'
                        />
                        <Menu.Item
                            name='messages'
                        />

                        <Menu.Menu position='right'>
                            <CartSummary/>
                            {this.state.isAuthenticated ? <SignIn signOut={this.handleSignOut}/> : <SignOut/>}
                        </Menu.Menu>
                    </Container>
                </Menu>
            </div>
        );
    }
}

export default Navi;
