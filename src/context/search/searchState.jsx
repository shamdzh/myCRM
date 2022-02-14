import React, { useReducer } from 'react'
import { SET_TEXT } from '../types'
import { SearchReducer } from './searchReducer'
import { SearchContext } from './searchContext'

export const SearchState = ({children}) => {
  const initialState = {
    searchText: ''
  }

  

  const [state, dispatch] = useReducer(SearchReducer, initialState)  


  const setText = (text) => {

    const payload = {
      text: text
    };

    dispatch({type: SET_TEXT, payload})
  }

  return (
    <SearchContext.Provider value={{
      searchText: state.searchText,
      setText
    }}>
      {children}
    </SearchContext.Provider>
  )
}
