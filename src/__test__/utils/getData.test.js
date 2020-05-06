//Prueba Fetch
import getData from '../../utils/getData';


describe('Fetch API', () => {
  beforeEach(() => { //Estructura que nos da fetchMock para trabajar
    fetch.resetMocks();
  });

  test('Llamar una API y retornar datos', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' })); //Este es el mock, en el cual simulamos la respuesta del fetch, en este caso sería ||data|| y lo Parseamos el JSON con ||JSON.stringify|| (en nuestra app, si se va a hacer el llamado al fetch normal, aquí simulamos esa acción)

    getData('https//google.com') //Probamos llamar la petición ||getData||, el parametro google.com se lo pasamos unicamente porque estamos simulando un parametro URL
      .then((response) => {
        expect(response.data).toEqual('12345'); //La data que devuelve el response debe ser igual a la que simulamos inicialmente para asegurarnos que la función getData funciona
      });

      expect(fetch.mock.calls[0][0]).toEqual('https//google.com'); //Garantizamos que la llamada a la URL google.com si se ejecuta
  });
});
