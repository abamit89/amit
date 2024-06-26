import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../types/user';

const UserContext = createContext<User | null>(null);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch('/api/getUser');
      const userData = await response.json();
      setUser(userData);
    };
    fetchUser();
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);




