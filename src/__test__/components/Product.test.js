import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import ProductMock from '../../__mocks__/ProductMock';
import Product from '../../components/Product';

describe('<Product />', () => {
  test('Render del componente Product', () => {
    const product = shallow(
      <ProviderMock>
        <Product />
      </ProviderMock>,
    );
    expect(product.length).toEqual(1);
  });
  test('Comprobar el botón/click de comprar', () => {
    const handleAddToCart = jest.fn(); //||jest.fn()|| sirve para simular llamar el metodo sin llamar el metodo original ||handleAddToCart||
    const wrapper = mount(
      <ProviderMock>
        <Product 
          product={ProductMock}
          handleAddToCart={handleAddToCart}
        />
      </ProviderMock>,
    );
    wrapper.find('button').simulate('click'); //Simule un click en el botón
    expect(handleAddToCart).toHaveBeenCalledTimes(1); //Queremos ver si se ejecuta este metodo por lo menos 1 vez
  });
});