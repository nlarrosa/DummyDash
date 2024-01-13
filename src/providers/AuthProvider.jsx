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
  const [state, dispatch] = useReducer(AuthReducer, initialValues);
  //#region Funciones
  //Funcion login
  const login = async (username, pass) => {
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
    sessionStorage.setItem('token', JSON.stringify(objectStorage));
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
  //Funcion chequeo de sesion
  const checkToken = async () => {
    const dataToken = JSON.parse(sessionStorage.getItem('token')) || "";
    if (dataToken== "") {
      dispatch({
        type: 'LOGOUT'
      });
    }else{
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
  }
  //Funcion logout
  const logout = () => {
    sessionStorage.removeItem("token");
    dispatch({
      type: 'LOGOUT',
    })
  }
  //#endregion
  return (
    //Declaro cual sera mi contexto para proveerle las funciones, estados y valores a retornarle
    <AuthContext.Provider value={{
      //Propiedades o valores q heredan los componentes hijos del provider
      //checkToken y logout no reciben nada, login si
      state,
      login,
      logout,
      checkToken
    }}>
    {/* Declaro mis childrens TODOS LOS PROVIDERS DEBEN TENERLO */}
      {children}
    </AuthContext.Provider>
  )
}
