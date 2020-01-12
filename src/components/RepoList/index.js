import React from 'react';
import { useStateValue } from '../../context/state';
import { prepareReposDataForItemRender } from '../../utils.js';
import List from '../List';

const RepoList = () => {
    const context = useStateValue();
    const { repos } = context;
    
    const items = prepareReposDataForItemRender(repos);
    
    return (
        <List items={items} title='Repositories'/>
        // <div>Dpenha</div>
    )
}

export default RepoList;