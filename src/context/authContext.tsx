import { useRouter } from 'next/router';
import React, { createContext, useEffect, useState } from 'react';

const TOKEN_KEY = 'auth-user-token';

type AuthContextType = {
  tokenKey: string;
  logout: () => void;
};

const authContextDefaultValues: AuthContextType = {
  tokenKey: '',
  logout: () => {}
};

export const AuthContext = createContext<AuthContextType>(authContextDefaultValues);

export const AuthContextProvider = ({ children }: React.PropsWithChildren) => {
  const router = useRouter();
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    const item = localStorage.getItem(TOKEN_KEY) || '';
    setToken(item);
  }, []);

  const logoutHandler = () => {
    setToken('');
    localStorage.removeItem(TOKEN_KEY);
    localStorage.clear();
    router.push('/login');
  };

  const contextValue = {
    tokenKey: token,
    logout: logoutHandler
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
