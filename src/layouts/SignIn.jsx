import React from 'react';
import {Dropdown, Image, Menu} from "semantic-ui-react";
import {signOut} from '../store/actions/userActions'
import {useDispatch} from "react-redux";
import {toast} from "react-toastify";

function SignIn() {

    const dispatch = useDispatch()

    const handleSignOut=()=> {
        dispatch(signOut());
        toast.success(`Çıkış Yapıldı`);
    }

    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right"
                       src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"></Image>
                <Dropdown pointing="top left" floating>
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={()=>handleSignOut()} text="Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    );

}

export default SignIn;
