import React from 'react';
import { mount } from 'enzyme'; //||mount|| trae todos los elementos del DOM
import Footer from '../../components/Footer';

describe('<Footer />', () => {
  const footer = mount(<Footer />);
  test('Render del componente Footer', () => {
    expect(footer.length).toEqual(1); //Evaluamos si footer se renderiza
  });
  test('Render del titulo', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store'); //Probamos que el titulo(text()) de la clase ||.Footer-title|| siempre se muestre y sea 'Platzi Store'
  });
});
