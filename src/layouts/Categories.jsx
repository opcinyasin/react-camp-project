import React, {Component} from 'react';
import {Menu} from "semantic-ui-react";

class Categories extends Component {
    render() {
        return (
            <div>
                <Menu pointing vertical>
                    <Menu.Item
                        name='home'
                    />
                    <Menu.Item
                        name='messages'
                    />
                    <Menu.Item
                        name='friends'
                    />
                </Menu>
            </div>
        );
    }
}

export default Categories;
