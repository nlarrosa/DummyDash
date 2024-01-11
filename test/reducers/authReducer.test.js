import { AuthReducer } from "../../src/reducers/AuthReducer"

describe('PRUEBA EN authReducer', () => {

    const initialValues = {
        user: null,
        isLogged: false,
        token: '',
        message: ''
    }

    test('validar que se ingrese los estados iniciales', () => {

        const newState = AuthReducer(initialValues, {});
        expect(newState).toBe(initialValues);
    });


    test('hacer un login', () => {

        const action = {
            type: 'LOGIN',
            payload: {
                user: {
                    name: 'Nicolas',
                    age: 47,
                }, 
                isLogged: true,
                token: '325345ljjlk34j5l3',
                message: ''
            }
        };

        const newState = AuthReducer(initialValues, action);
        expect(newState).toEqual(action.payload);
        expect(newState.user).toEqual(action.payload.user);
        expect(newState.isLogged).toBeTruthy();
        
    })
 })