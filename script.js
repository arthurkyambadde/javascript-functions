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

// document.body.addEventListener('click', hey);

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
    this.booking.push({ flight: `${this.code}${flightNum}`, passengerName });
  },
};

ugandaAirlines.book('244', 'Kyambadde Arthur');
ugandaAirlines.book(254, 'Sssejemba danieil');
console.log(ugandaAirlines);

const rwandaAirline = {
  airline: 'Rwanda airline',
  code: 'RW',
  booking: [],
};

//store book function in uganda airline into a variable

const bookFunction = ugandaAirlines.book;

// bookFunction(45, 'Ssonko jimmy');

//call method
//apply method
//bind method

bookFunction.call(rwandaAirline, 57, 'Ssonk jimmy');

bookFunction.call(ugandaAirlines, 257, 'ssembatya dennis');

const kenyaAirline = {
  airline: 'Kenya airline',
  code: 'KY',
  booking: [],
};

bookFunction.call(kenyaAirline, 465, 'sejengo jordan');

//if passenger information was in an array

const newpassenger = [562, 'jimmy banks'];

bookFunction.call(rwandaAirline, ...newpassenger);
bookFunction.call(kenyaAirline, ...[562, 'jimmy banks']);

//bind method

const bookRwanda = bookFunction.bind(rwandaAirline);
// console.log(bookRwanda);

//partial application
bookRwanda(78, 'lubuulwa steven');

const bookKen678 = bookFunction.bind(kenyaAirline, 678);

bookKen678('amako fadhil');

//with event listeners

ugandaAirlines.planes = 100;
ugandaAirlines.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

//bug
document
  .querySelector('.buy')
  .addEventListener('click', ugandaAirlines.buyPlane.bind(ugandaAirlines));
//bug

//CODING CHALLENGE

//BONUS TEST DATA 1: [5, 2, 3]
//BONUS TEST DATA 2: [1,5,3,9,6,1]

const poll = {
  question: 'What is your favourite programming Language',
  options: ['0: Javascript', '1: Python', '2: Rust', '3: c++'],

  answers: new Array(4).fill(0),

  registerNewAnswer() {
    //get answer variable
    const answer = Number(
      prompt(
        `${this.question}\n ${this.options.join('\n')} \n('Write option number)`
      )
    );
    console.log(answer);
    //register answer

    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    // console.log(this.answers);
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(`${this.answers}`);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')} `);
    }
  },
};
// poll.registerNewAnswer();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'array');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
