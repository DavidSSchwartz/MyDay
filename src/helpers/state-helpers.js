import React, { useState, useEffect } from 'react';
const useStateWithLocalStorage = (localStorageKey, initialState) => {
    const [value, setValue] = useState(
      localStorage.getItem(localStorageKey) || initialState || ''
    );
   
    useEffect(() => {
      localStorage.setItem(localStorageKey, value);
    }, [value]);
   
    return [value, setValue];
};

export default useStateWithLocalStorage;