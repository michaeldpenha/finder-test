import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useStateValue } from '../../context/state';

import './styles.css';

const Search = (props) => {
  const context = useStateValue();
  const { searchUsers } = context;
  const [text, setText] = useState('');

  const triggerFetchUsers = (val) => {
        searchUsers(val);
  }

  const onChange = async (e) => {
    const val = e.target.value;
    const { searchedUser } = props;

    if(val.length % 2 === 0){
        triggerFetchUsers(val);
    }

    if(searchedUser){
        searchedUser(val);
    }
    setText(val);
  }

  return (
    <div className='search-wrapper'>
        <input
            type='text'
            name='username'
            placeholder='Search Github Users...'
            value={text}
            onChange={onChange}
        />
    </div>
  );
};

export default Search;

Search.propTypes = {
    searchedUser : PropTypes.func
}

Search.defaultProps = {
    searchedUser : () => {}
}
