'use client'
import React, { useReducer, createContext, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { CredentialsInterface, User, UserIDs } from '../interfaces/interfaces';
import { useRouter, usePathname } from 'next/navigation';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const initialState = {
  user: null,
};

export type AuthContextType = {
  user: any;
  login: (credentials: CredentialsInterface) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: (userData) => {},
  logout: () => {},
});

function authReducer(state: any, action: any) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}

const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const [userIDs, setUserIDs] = React.useState<UserIDs>({
    id: 0,
    mail: '',
  });
  const router = useRouter();
  const pathName = usePathname();

  const login = async (credentials: CredentialsInterface) => {
   
     await fetch(`${apiUrl}/api/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem('token', data);
        const decoded: any = jwtDecode(data);

        setUserIDs({ id: decoded.id, mail: decoded.mail })
      })
    }     
  const logout = () => {
    localStorage.removeItem('token');
    dispatch({ type: 'LOGOUT' });
  };

  useEffect(() => {
    const redirectToHome = () => {
      router.push('/');
    }
    if (userIDs.id !== 0) {
      const getOneUser = async (id: number) => {
        const token = localStorage.getItem('token');
        return await fetch(`${apiUrl}/api/users/${id}`, {
          headers: {
            'Authorization': 'Bearer ' + token
          }
        })
        .then((response) => response.json())
        .then((data: User) => {
          if (!data) {
           router.replace('/connexion');
          } else {
            dispatch({
            type: 'LOGIN',
            payload: { mail: userIDs.mail, id: userIDs.id},
            });
            
           }
           if (data.role === 'user') {
             redirectToHome();
           }
           if (data.role === 'admin') {
             router.push('/admin');
           }
           if (pathName.includes('admin') && data.role === 'user') {
            redirectToHome();
           }

        })
      }
      getOneUser(userIDs.id);
    }
  }, [userIDs, router, pathName])

  return (
    <AuthContext.Provider value={{ user: state.user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };