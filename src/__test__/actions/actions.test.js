//Prueba de actions de Redux
import actions from '../../actions/index';
import ProductMock from '../../__mocks__/ProductMock';


describe('Actions', () => {
  test('addToCart Action', () => { //Prueba action(metodo) AddToCart de Redux
    const payload = ProductMock; //Estructura que necesita el action(metodo) para funcionar, para eso creamos el Mock
    const expected = { //Lo que esperamos del action
      type: 'ADD_TO_CART',
      payload,
    };
    expect(actions.addToCart(payload)).toEqual(expected); //Probamos el action de Redux esperando que sea igual al ||expected||
  });

  test('removeFromCart Action', () => {
    const payload = ProductMock;
    const expected = {
      type: 'REMOVE_FROM_CART',
      payload,
    };
    expect(actions.removeFromCart(payload)).toEqual(expected);
  });
});
