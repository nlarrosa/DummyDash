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


})