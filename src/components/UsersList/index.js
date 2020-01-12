import React from 'react';
import { prepareUsersDataForItemRender } from '../../utils.js';
import List from '../List';
import { useStateValue } from '../../context/state';

const UsersList =  () => {
    const context = useStateValue();
    const { users } = context;
    const items = users ? prepareUsersDataForItemRender(users) : [];

    return (
        <List items={items} title='Users'/>
    )
}

export default UsersList;
