import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface SignInCredentials {
  email: string;
  senha: string;
}

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  token: string;
  user: User;
  role: string;
}

interface AuthContextData {
  user: User;
  role: string;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    if (typeof window === 'undefined') return {} as AuthState;

    const token = localStorage.getItem('@SysWeb:token');
    const user = localStorage.getItem('@SysWeb:user');
    const role = localStorage.getItem('@SysWeb:role');

    if (token && user && role) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user), role: JSON.parse(role) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, senha }) => {
    const response = await api.post('/login', {
      email,
      senha,
    });

    const { token, nome: user, role } = response.data;

    localStorage.setItem('@SysWeb:token', token);
    localStorage.setItem('@SysWeb:user', JSON.stringify(user));
    localStorage.setItem('@SysWeb:role', JSON.stringify(role));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user, role });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@SysWeb:token');
    localStorage.removeItem('@SysWeb:user');
    localStorage.removeItem('@SysWeb:role');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, role: data.role, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
