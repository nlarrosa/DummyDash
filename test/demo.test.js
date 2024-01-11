


describe('PRUEBA EN <demoTest/>', () => { 

    test('Comprobar que los MSG sean iguales', () => {

        //1-Inicializacion / Objeto de Pruebas
        const msgA = 'Hola Mundo';

        //2 - Estimulo / prueba
        const msgB = msgA.trim();

        //3- Respuesta test / validacion
        expect(msgA).toBe(msgB)

    });

});


