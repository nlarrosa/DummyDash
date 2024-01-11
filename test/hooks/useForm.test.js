import { act, renderHook } from "@testing-library/react"
import { useForm } from "../../src/Hooks/useForm"

describe('PRUEBA EN useForm', () => {

    const newValue = 'Nicolas';


    test('debe regresar los valores por defecto', () => {

        const { result }  = renderHook( () => useForm());
        // console.log(result.current)
        const { onChangeInput } = result.current;

        act(() => {
            onChangeInput({ target: {name: 'username', value: newValue}})
        });

        expect(result.current.formState.username).toBe(newValue);
    })
})