const initialState = {
  shops: [
    {
      id: 1,
      lat: 52.229675,
      lng: 21.012230,
      name: 'Galeria Młokowiec',
      adress: 'Bolesława 5/3, 02-987, Warszawa',
      openHours: 'Pon-sob 9.00-21.00',
    },
    {
      id: 2,
      lat: 52.220859,
      lng: 20.961601,
      name: 'Arkadiowo',
      adress: 'Krzysztofa Bohatera 28, 01-923, Warszawa',
      openHours: 'Pon-sob 9.00-20.00',
    },
    {
      id: 3,
      lat: 52.206660,
      lng: 21.031155,
      name: 'Vola Sad',
      adress: 'Józefa 1, 02-967, Warszawa',
      openHours: 'Pon-sob 9.00-21.00',
    },
    {
      id: 4,
      lat: 52.156663,
      lng: 20.993764,
      name: 'Premieniada',
      adress: 'Marlona 82, 01-927, Warszawa',
      openHours: 'Pon-sob 9.00-22.00',
    },
  ],

};

const shopsReducer = (state = initialState) => state;

export default shopsReducer;
