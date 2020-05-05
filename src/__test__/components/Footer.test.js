import React from 'react';
import { mount } from 'enzyme'; //||mount|| trae todos los elementos del DOM
import { create } from 'react-test-renderer'; //uso de Snapshots
import Footer from '../../components/Footer';

//describe === suite
describe('<Footer />', () => {
  const footer = mount(<Footer />);
  test('Render del componente Footer', () => {
    expect(footer.length).toEqual(1); //Evaluamos si footer se renderiza
  });
  test('Render del titulo', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store'); //Probamos que el titulo(text()) de la clase ||.Footer-title|| siempre se muestre y sea 'Platzi Store'
  });
});

//Snapshot suite
describe('Footer Snapshot', () => {
  test('Comprobar la UI del componente Footer', () => {
    const footer = create(<Footer />); //Como no está conectado con redux, se ejecuta como componente
    expect(footer.toJSON()).toMatchSnapshot(); //Convierte el footer a JSON
  });
});
