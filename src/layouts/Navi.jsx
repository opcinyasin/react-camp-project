import {Container, Menu} from 'semantic-ui-react'
import CartSummary from "./CartSummary";
import SignOut from "./SignOut";
import SignIn from "./SignIn";
import {useSelector} from "react-redux";

function Navi() {

    const {cartItems} = useSelector(state => state.cart)
    const {userItems} = useSelector(state => state.user)

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
                        {userItems.isAuthenticated ? <SignIn/> :
                            <SignOut/>}
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    );

}

export default Navi;
