import { render } from "@testing-library/react";
import { LoginPage } from "../../../src/pages/auth/LoginPage";

describe('PRUEBA EN <LoginPage/>', () => {

    // test('Hacer un match con snapshot test', () => {
         
    //      const { container } = render(<LoginPage />);
    //     //  console.log(container);
    //     expect(container).toMatchSnapshot();
    // });



    test('Mostrar el titulo del Login en un h1', () => {

        const title = 'DashDummy';
        const user = 'kminchelle';

        const {getByText, getByTestId } = render(<LoginPage />);
        expect(getByText(title)).toBeTruthy();
        expect(getByTestId('titleLogin').innerHTML).toBe(title);
    });


    test('Evaluar que mi login tenga solo dos campos input', () => {

        const user = 'kminchelle';
        const { getAllByTestId } = render(<LoginPage/>);
        // console.log(getAllByTestId('test-login')[0]);
        expect(getAllByTestId('test-login').length).toBe(2);
    })

})