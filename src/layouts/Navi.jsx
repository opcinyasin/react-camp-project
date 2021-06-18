import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import {Container, Menu} from 'semantic-ui-react'
import CartSummary from "./CartSummary";
import SignOut from "./SignOut";
import SignIn from "./SignIn";
import {useSelector} from "react-redux";

function Navi() {

    const {cartItems} = useSelector(state => state.cart)

    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const history = useHistory()

    function handleSignOut() {
        setIsAuthenticated(false)
        history.push("/")
    }

    function handleSignIn() {
        setIsAuthenticated(true)
    }

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
                        {cartItems.length > 0 && <CartSummary/>}
                        {isAuthenticated ? <SignIn signOut={handleSignOut}/> :
                            <SignOut signIn={handleSignIn}/>}
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    );

}

export default Navi;
