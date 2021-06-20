import React from 'react';
import {Button, Menu} from "semantic-ui-react";
import {useDispatch} from "react-redux";
import {signIn} from '../store/actions/userActions'
import {toast} from "react-toastify";


function SignOut() {

    const dispatch = useDispatch()

    const handleSignIn=()=> {
        dispatch(signIn());
        toast.success(`Giriş Yapıldı`);
    }
    return (
        <div>
            <Menu.Item>
                <Button primary onClick={()=>handleSignIn()}>Giriş Yap</Button>
                <Button primary style={{marginLeft: "0.5em"}}>Kayıt Ol</Button>
            </Menu.Item>
        </div>
    );

}

export default SignOut;
