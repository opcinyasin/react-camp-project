import React from 'react';
import {Dropdown, Image, Menu} from "semantic-ui-react";

function SignIn({signOut}) {

    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right"
                       src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"></Image>
                <Dropdown pointing="top left" floating>
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    );

}

export default SignIn;
