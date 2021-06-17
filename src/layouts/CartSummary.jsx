import React, {Component} from 'react';
import {Dropdown} from "semantic-ui-react";

class CartSummary extends Component {
    render() {
        return (
            <div>
                <Dropdown item text='Language'>
                    <Dropdown.Menu>
                        <Dropdown.Item>English</Dropdown.Item>
                        <Dropdown.Item>Russian</Dropdown.Item>
                        <Dropdown.Item>Spanish</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        );
    }
}

export default CartSummary;
