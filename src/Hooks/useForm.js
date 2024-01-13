import { useContext } from 'react';//obsolete
import { useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';//obsolete

export const useForm = () => {
    const [formState, setFormState] = useState({});
    const onChangeInput = (event) => {
      const field = event.target.name;//Recibe el nombre de la etiqueta input
      const value = event.target.value;//Recibe el valor dentro del input
        setFormState({...formState,[field]:value})};//Se cargan a medida que se llegan los campos guardandose en el state
  return {
    ...formState,
    formState,
    onChangeInput,
  }
}
