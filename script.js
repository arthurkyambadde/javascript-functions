'use strict';

const flight = 'LH234';
const arthur = {
  name: 'arthur Kyambadde',
  passport: 24352463465747,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr ' + passenger.name;

  if (passenger.passport === 24352463465747) {
    alert('Check in!');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, arthur);
// console.log(flight);
// console.log(arthur);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000000);
};

// newPassport(arthur);
// console.log(arthur);
// checkIn(flight, arthur);
// console.log(flight, arthur);

//PASSING BY VALUE
//PASSING BY REFERENCE

//javascript passes by only value

//FIRST-CLASS AND HIGHER ORDER FUNCTIONS

// 1) FIRST CLASS FUNCTIONS
// javascript treats functions as first class citizens
// functions are simply values
// functions a 'type' of Object

// 2) HIGHER ORDER FUNCTIONS
// these are functions that receive other functions as an argument that returns a new function or both eg addEventListener()

//remebering destructuring arrays
const destructor = function (strigg) {
  const [firstWord, ...otherWords] = strigg.split(' ');
  // console.log(firstWord, otherWords);
};

destructor('Thank you darsha');

const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

// console.log(oneWord('does it work'));

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  // console.log(first, others);
  return [first.toUpperCase(), ...others].join(' ');
};

// console.log(upperFirstWord('why now come on'));

//HIGHER ORDER FUNCTION

const transformer = function (str, fn) {
  console.log(`Original string : ${str} `);
  console.log(`Transformed string : ${fn(str)}`);
  console.log(`Transformed by : ${fn.name}`);
};
// transformer('Darsha needs help', upperFirstWord);

// transformer('Darsha needs help', oneWord);

const hey = function () {
  const comeon = prompt('hey 😎✋');
  // console.log(comeon);
  return comeon;
};

document.body.addEventListener('click', hey);

//JAVASCRIPT CLOSURE

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('hey');

// greeterHey('daniel');
// greeterHey('jimmy');

// greet('Good morning')('Arthur');

const greetfn = greeting => names => console.log(`${greeting} ${names}`);

//why doesnt name work

// greetfn('does it work----')('........yes it does');

const ugandaAirlines = {
  airline: 'Uganda airline',
  code: 'UG',
  booking: [],
  book(flightNum, passengerName) {
    console.log(
      `${passengerName} booked a seat on ${this.airline} flight ${this.code}${flightNum}`
    );
  },
};

ugandaAirlines.book('244', 'Kyambadde Arthur');
