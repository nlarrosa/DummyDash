import React from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useReducer } from 'react';
import { AuthReducer } from '../reducers/AuthReducer';
import { axiosDash } from '../config/dashAxios';



const initialValues = {
  user: {}, 
  isLogged: false,
  token: '',
  message: ''
}


export const AuthProvider = ({ children }) => {

const [ state, dispatch ] = useReducer(AuthReducer, initialValues);


    const login = async(username, pass) => {

        const { data } = await axiosDash.post('/auth/login', {
          username: username,
          password: pass,
        });


        const objectStorage = {
          user: {
            id: data.id,
            username: data.username,
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
            gender: data.gender,
          },
          token: data.token
        }

        localStorage.setItem('token', JSON.stringify(objectStorage));


        dispatch({
          type: 'LOGIN',
          payload: {
            user: {
              id: data.id,
              username: data.username,
              email: data.email,
              firstName: data.firstName,
              lastName: data.lastName,
              gender: data.gender,
            },
            token: data.token
          }
        })
    }


    const checkToken = async() => {

         const token = localStorage.getItem('token');
         const dataToken = JSON.parse(token);

         console.log(dataToken.user)

         if(!token){
          dispatch({
            type: 'LOGOUT'
          });
         }


         dispatch({
          type: 'LOGIN',
          payload: {
            user: {
              id: dataToken.user.id,
              username: dataToken.user.username,
              email: dataToken.user.email,
              firstName: dataToken.user.firstName,
              lastName: dataToken.user.lastName,
              gender: dataToken.user.gender,
            },
            token: dataToken.token
          }
        });
    }



    const logout = () => {
      
        dispatch({
          type: 'LOGOUT',
        })
    }




  return (
    
    <AuthContext.Provider value={{
        state,
        login,
        logout,
        checkToken
    }}>
        { children }
    </AuthContext.Provider>
  )
}
