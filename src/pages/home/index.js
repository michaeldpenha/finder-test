import React, { useState } from 'react';
import Search from '../../components/Search';
import UsersList from '../../components/UsersList';

const Home = () => {
    const [ displayList , setDisplayList] = useState(false);
     
    const searchedUser = (val) => {
        const serachText = val.length > 0;
        setDisplayList(serachText);    
    }

    return (
        <>
            <Search searchedUser={searchedUser}/>
            {
                displayList && <UsersList/>
            }
        </>
    )
}

export default Home;