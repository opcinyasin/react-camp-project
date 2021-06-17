import React, {Component} from 'react';
import {Dropdown, Image, Menu} from "semantic-ui-react";

class SignIn extends Component {

    render() {
        return (
            <div>
                <Menu.Item>
                    <Image avatar spaced="right"
                           src="https://yt3.ggpht.com/ytc/AAUvwngw35YY8vYI86RTOoEGafSxEjghjzTcKw3LbMyZ=s900-c-k-c0x00ffffff-no-rj"></Image>
                    <Dropdown pointing="top left" floating>
                        <Dropdown.Menu>
                            <Dropdown.Item text="Bilgilerim" icon="info"/>
                            <Dropdown.Item onClick={this.props.signOut} text="Çıkış Yap" icon="sign-out"/>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
            </div>
        );
    }
}

export default SignIn;
