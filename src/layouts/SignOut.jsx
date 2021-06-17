import React, {Component} from 'react';
import {Button, Menu} from "semantic-ui-react";

class SignOut extends Component {
    render() {
        return (
            <div>
                <Menu.Item>
                    <Button primary>Giriş Yap</Button>
                    <Button primary style={{marginLeft:"0.5em"}}>Kayıt Ol</Button>
                </Menu.Item>

            </div>
        );
    }
}

export default SignOut;
