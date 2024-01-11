import { fireEvent, render, screen } from "@testing-library/react"
import { LoginPage } from "../../../src/pages/auth/LoginPage"
import { AuthContext } from "../../../src/contexts/AuthContext"

describe('PRUEBA EN <LoginPage CTX/>', () => {

    const user = 'kminchelle';


    test('Ejecutar la funcion login del context', () => {

        const loginMkp = jest.fn();

        render(
            <AuthContext.Provider value={{ login: loginMkp }}>
                <LoginPage />
            </AuthContext.Provider>
        )

        const userInput = screen.getByRole("textbox", {name: 'Username'});
        const btnLogin  = screen.getByRole('button', {name: 'btn-login'});
        fireEvent.input(userInput, {target: { value: user}})
        fireEvent.submit(btnLogin);

        expect(loginMkp).toHaveBeenCalled();
        expect(loginMkp).toHaveBeenCalledTimes(1);
        expect(loginMkp).toHaveBeenCalledWith(user);
    })
})