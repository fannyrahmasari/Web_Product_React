import React, { createContext, useContext, useReducer } from 'react';

const SET_FORM_DATA = 'SET_FORM_DATA';

const initialState = {
  formData: {
    productName: '',        
    productCategory: '',
    image: '',
    productFreshness: '',
    deskription: '',
    productPrice: ''
  },
};

const appReducer = (state, action) => {
  switch (action.type) {
    case SET_FORM_DATA:
      return {
        ...state,
        formData: {
          ...state.formData,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const setFormData = (data) => {
    dispatch({ type: SET_FORM_DATA, payload: data });
  };


  return (
    <AppContext.Provider value={{ state, setFormData }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
