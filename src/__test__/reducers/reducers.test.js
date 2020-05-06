//Prueba de reducers de Redux
import reducer from '../../reducers';
import ProductMock from '../../__mocks__/ProductMock';


describe('Reducers', () => {
  test('Retornar initial State', () => { //Prueba deL default y que si se este pasando el estado inicial que debería pasarse en la aplicación
    expect(reducer({}, '')).toEqual({}); //||reducer|| recibe 2 parametros: El reducer/estado y actions/metodos (en este caso no recibe actions), la logica de este reducer es que SI NO COINCIDE con ningun caso, Aquí probamos el return default
  });

  test('ADD_TO_CART', () => { //Prueba del caso ADD_TO_CART
    const initialState = {
      cart: [],
    };
    const payload = ProductMock;
    const action = {
      type: 'ADD_TO_CART',
      payload,
    };
    const expected = {
      cart: [
        ProductMock,
      ],
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});
