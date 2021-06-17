import React from 'react';
import {Dropdown} from "semantic-ui-react";
import {NavLink} from "react-router-dom";

function CartSummary() {
    return (
        <div>
            <Dropdown item text='Sepetiniz'>
                <Dropdown.Menu>
                    <Dropdown.Item>English</Dropdown.Item>
                    <Dropdown.Item>Russian</Dropdown.Item>
                    <Dropdown.Item>Spanish</Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item as={NavLink} to="/cart">Sepete Git</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default CartSummary;
