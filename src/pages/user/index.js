import React, { useEffect } from 'react';
import UsersInfo from '../../components/UsersInfo';
import RepoList from '../../components/RepoList';
import { useStateValue } from '../../context/state';
import Link from '../../components/Link';

import './styles.css';

const User = (props) => {
    const { match } = props;
    const { params: { username } } = match;
    const context = useStateValue();
    const { getUser, getRepos } = context;
    
    useEffect(() => {
        getUser(username);
        getRepos(username);

        // eslint-disable-next-line react-hooks/exhaustive-deps
      },[username]);

    return (
        <>  
            <div className="back-button">
              <Link to='/'>Back To Search</Link>
            </div>
            <UsersInfo />
            <RepoList />
        </>
    )
}

export default User;