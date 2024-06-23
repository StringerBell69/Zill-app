import React, { useState, ReactNode } from 'react';

interface LoginProviderProps {
  children: ReactNode;
}

export const LoginProvider: React.FC<LoginProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle login
  const login = (email: string, password: string) => {
    // Implement your login logic here
    if (email === 'test@test.fr' && password === 'test') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials');
    }
  };

  // Function to handle logout
  const logout = () => {
    setIsAuthenticated(false);
  };

  // Return the provider with context values
  return (
    <LoginContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};

// Context initialization
export const LoginContext = React.createContext({
  isAuthenticated: false,
  login: (email: string, password: string) => {},
  logout: () => {}
});

// Custom hook to use the context
export const useLogin = () => {
  return React.useContext(LoginContext);
};
