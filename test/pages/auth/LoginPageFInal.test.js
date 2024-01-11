import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../../src/pages/auth/LoginPage";


describe('PRUEBA EN <LoginPage/>', () => {

    const title = 'DashDummy';
    const user = 'kminchelle';
    const pass = '0lelplR';


    test('Mostrar el titulo del Login en un h1', () => {

        render(<LoginPage />);
        expect(screen.getByText(title)).toBeTruthy();
        expect(screen.getByTestId('titleLogin').innerHTML).toBe(title);

    });


    test('Ejecutar el handleSubmitLogin si el input user tiene un valor' ,() => {

        render(<LoginPage/>);
        
        // console.log(screen.getByRole())
        // Hago la referencia al Inpout user
        const userInput = screen.getByRole("textbox", {name: 'Username'});
        //Disparo el evento para cargar el input con datos
        fireEvent.input(userInput, { target: { value: user}});

        //Valido que mi campo no este en null
        expect(userInput.length).not.toBeNull();

        //Ejecutar el click del login
        fireEvent.click(screen.getByRole('button', { name: 'btn-login' }));

        // Validar que el campo que estoy enviando tenga el valor
        expect(userInput.value).toBe(user);
    });

})