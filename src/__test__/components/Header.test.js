import React from 'react';
import { mount, shallow } from 'enzyme'; //||shallow|| Permite traer elementos especificos del DOM, ||mount|| trae TODO el DOM
import { create } from 'react-test-renderer';
import ProviderMock from '../../__mocks__/ProviderMock';
import Header from '../../components/Header';

describe('<Header />', () => {  
  test('Render del componente Header', () => {
    const header = shallow(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.length).toEqual(1);
  });
  test('Render del titulo', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.find('.Header-title').text()).toEqual('Platzi Store')
  });
});


describe('Header Snapshot', () => {
  test('Comprobar el snapshot de Header', () => {
    const header = create( //Si tiene redux, incluimos el provider
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.toJSON()).toMatchSnapshot();
  });
});
