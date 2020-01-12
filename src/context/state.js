import React, { useReducer, useContext } from 'react';
import PropTypes from 'prop-types';
import Context from './index';
import Reducer from './reducer';
import { fetchUsers, fetchUser, fetchRepos } from '../services';

const Provider = props => {
  const intialState = {
    users: [],
    user: {},
    repos: [],
  };

  const [state, dispatch] = useReducer(Reducer, intialState);

  const searchUsers = async text => {
    let items = [];
    if(text){
        const res = await fetchUsers(text);
        const { items: resItems } = res;
        items = resItems;
    }  
    
    dispatch({
      type: 'SEARCH_USERS',
      payload: items
    });
  };

  const getUser = async username => {
    const res = await fetchUser(username);

    dispatch({
      type: 'GET_USER',
      payload: res
    });
  };

  const getRepos = async username => {
    const res = await fetchRepos(username);

    dispatch({
      type: 'GET_REPOS',
      payload: res
    });
  };

  return (
    <Context.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        searchUsers,
        getUser,
        getRepos
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Provider;

export const useStateValue = () => useContext(Context);

Provider.propTypes = {
    children: PropTypes.node.isRequired
}