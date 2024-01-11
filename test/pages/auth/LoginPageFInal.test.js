import { render, screen } from "@testing-library/react";
import { LoginPage } from "../../../src/pages/auth/LoginPage";

describe('PRUEBA EN <LoginPage/>', () => {

    const title = 'DashDummy';
    const user = 'kminchelle';

    test('Mostrar el titulo del Login en un h1', () => {

        const { container } = render(<LoginPage />);
        screen.debug();
        // console.log(container)
        // expect(screen.getByText(title)).toBeTruthy();
        // expect(screen.getByTestId('titleLogin').innerHTML).toBe(title);
        // expect(getByTestId('login').innerHTML).toContain(user);

        // const h1 = container.querySelector('h1');
        // console.log(h1.innerHTML);
        // expect(h1.innerHTML).toBe(title);
    });
})