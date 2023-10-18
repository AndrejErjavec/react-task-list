import {useState} from 'react';

function setItemAndReturn(key, value) {
  localStorage.setItem(key, value)
  return value
}

export const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    const value = localStorage.getItem(key);
    if (value) {
      return value;
    }
    else {
      return setItemAndReturn(key, defaultValue);
    }
  });

    const setItem = (newState) => {
      setState(newState);
      localStorage.setItem(key, newState);
    }

    return [state, setItem];
}
