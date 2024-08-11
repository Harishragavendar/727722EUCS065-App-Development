// src/UserContext.js
import React, { createContext, useState } from 'react';

// Create the context
export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [userName1, setUserName1] = useState('');

  return (
    <UserContext.Provider value={{ userName1, setUserName1 }}>
      {children}
    </UserContext.Provider>
  );
};