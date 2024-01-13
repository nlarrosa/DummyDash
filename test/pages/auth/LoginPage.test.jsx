const { render, screen, fireEvent } = require("@testing-library/react")
const { LoginPage } = require("../../../src/pages/auth/LoginPage");
const { AuthContext } = require("../../../src/contexts/AuthContext");

describe('PRUEBA EN <LoginPage/>', () => {


    const title = 'DashDummy';
    const user = 'kminchelle';
    const pass = '0lelplR';

    const handleSubmitLogin = jest.fn();
    


    test('Hacer un match con snapshot test', () => {
         
        render(
            <AuthContext.Provider value={{ login: handleSubmitLogin }}>
                <LoginPage />
            </AuthContext.Provider>
        );

        expect(screen).toMatchSnapshot();
    });


    
    test('Mostrar el titulo del Login en un h1', () => {

        render(
            <AuthContext.Provider value={{ login: handleSubmitLogin }}>
                <LoginPage />
            </AuthContext.Provider>
        );

        expect(screen.getByText(title)).toBeTruthy();
        expect(screen.getByTestId('titleLogin').innerHTML).toBe(title);
    });



    test('Validar si el input username tiene valor', () => {

        render(
            <AuthContext.Provider value={{ login: handleSubmitLogin }}>
                <LoginPage />
            </AuthContext.Provider>
        );

        screen.debug();
        const userInput = screen.getByRole('textbox', {name: 'Username'});
        const loginBtn  = screen.getByRole('button', { name: 'btn-login'});

        fireEvent.input(userInput, { target: { value: user }});
        expect(userInput.value).toBeTruthy();

    });


    test('Ejecutar la funcion del Login con el context', () => {

        render(
            <AuthContext.Provider value={{ login: handleSubmitLogin }}>
                <LoginPage />
            </AuthContext.Provider>
        );
        
        const userInput = screen.getByRole('textbox', {name: 'Username'});
        const loginBtn  = screen.getByRole('button', { name: 'btn-login'});

        fireEvent.input(userInput, { target: { value: user }});
        fireEvent.submit(loginBtn);

        expect(handleSubmitLogin).toHaveBeenCalled();
        expect(handleSubmitLogin).toHaveBeenCalledTimes(1);
        expect(handleSubmitLogin).toHaveBeenCalledWith(user);
    });

})