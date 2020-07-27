import React, {useReducer} from 'react';
import {GithubContext} from './GithubContext';
import {GithubReducer} from './GithubReducer';
import {
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
  SEARCH_USERS, SET_LOADING
} from '../types';

export const GithubState = ({children}) => {
  const initialState = {
    user: {},
    users: [],
    loading: false,
    repos: []
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState)

  const search = async value => {
    setLoading()
    dispatch({
      type: SEARCH_USERS,
      payload: []
    })
  }

  const getUser = async name => {
    setLoading()
    dispatch({
      type: GET_USER,
      payload: {}
    })
  }

  const getRepos = async name => {
    setLoading()
    dispatch({
      type: GET_REPOS,
      payload: []
    })
  }

  const clearUsers = () => dispatch({type: CLEAR_USERS})

  const setLoading = () => dispatch({type: SET_LOADING})

  const {user, users, loading, repos} = state

  return (
    <GithubContext.Provider value={{
      search, getUser, getRepos, setLoading, clearUsers,
      user, users, loading, repos
    }}>
      {children}
    </GithubContext.Provider>
  )
}