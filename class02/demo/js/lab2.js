'use strict';

let score=0;
let userName = prompt('Enter your name');
console.log(userName);
alert('Hello '+ userName + '🧡');


let ownerAge= prompt('Do you think that I am over 30 years old?','yes/y or no/n').toLowerCase();

const agefunction = function (age) {

  ownerAge = age.toLowerCase();

  while ( (ownerAge !== 'yes') && (ownerAge !== 'no' ) && (ownerAge !== 'y' ) && (ownerAge !== 'n' ))
  {
    ownerAge= prompt('Do you think that I am over 30 years old?','yes/y or no/n').toLowerCase();
  }
  if((ownerAge ==='yes')||(ownerAge ==='y')){
    console.log('your answer is : '+ ownerAge + ' it is false the righi answer is 26');
    alert('I am just 26');
  }
  else if((ownerAge ==='no')||(ownerAge ==='n')){
    console.log('true my age is  '+ ownerAge );
    alert('your answer is : '+ ownerAge +' You are right ^_^');
    score++;
  }
};
agefunction(ownerAge);


let ownerTalent = prompt('Do you think that I have any talents?','yes/y or no/n').toLowerCase();

const talentFanction = function ( talent ) {
  ownerTalent= talent.toLowerCase();

  while ((ownerTalent!== 'yes') && (ownerTalent !== 'no'&& (ownerTalent !== 'y' ) && (ownerTalent !== 'n' )))
  {
    ownerTalent = prompt('Do you think that I have any talents?','yes/y or no/n').toLowerCase();
  }
  if((ownerTalent ==='yes')||(ownerTalent ==='y')){
    console.log('Your answer is :'+ ownerTalent + ' it is True');
    alert('you are right, I am  an artist and guitarist ^_^ 🎸 🎨 ');
    score++;
  }
  else if((ownerTalent ==='no')||(ownerTalent ==='n')){
    console.log('Your answer is : '+ ownerTalent +' You are wrong, I am  an artist and guitarist ^_^');
    alert('You are wrong, I am  an artist and guitarist ^_^ 🎸 🎨');
  }


};

talentFanction(ownerTalent);


let ownerMeeting=prompt('Do you want to meet me?','yes/y or no/n').toLowerCase();

const meetFunction = function (meeting) {
  ownerMeeting = meeting.toLowerCase();
  while ((ownerMeeting!== 'yes') && (ownerMeeting!== 'no') &&(ownerMeeting!== 'y') && (ownerMeeting!== 'n') )
  {
    ownerMeeting=prompt('Do you want to meet me?','yes/y or no/n').toLowerCase();
  }
  if((ownerMeeting ==='yes')||(ownerMeeting ==='y')){
    console.log('Your answer is :'+ ownerMeeting+ ' I am really so lucky for you ^___^' );
    alert('I am really so lucky for you ^___^');
    score++;
  }
  else if((ownerMeeting ==='no')||(ownerMeeting ==='n')){
    console.log('Your answer is : ' + ownerMeeting );
    alert('you are the looser 😝 ^_^');
  }

};

meetFunction(ownerMeeting);

let ownerPets=prompt('Do I have any pets?','yes/y or no/n').toLowerCase();

const petsFunction = function (pets) {
  ownerPets = pets.toLowerCase();
  while ((ownerPets !== 'yes') && (ownerPets !== 'no') && (ownerPets !== 'y') && (ownerPets !== 'n'))
  {
    ownerPets=prompt('Do I have any pets?','yes/y or no/n').toLowerCase();
  }
  if((ownerPets ==='yes')||(ownerPets ==='y')){
    console.log('False :' + ownerPets + ' I dont have any pets but i wish i have a cat 🐈');
    alert('I dont have any pets but i wish i have a cat 🐈');
  }
  else if((ownerPets ==='no')||(ownerPets ==='n')){
    console.log(ownerPets + ' Correct answer');
    alert('you are right');
    score++;
  }

};
petsFunction(ownerPets);

let ownerReading=prompt('Do I love reading books? 📖','yes/y or no/n').toLowerCase();

const readFunction = function (reading) {
  ownerReading =reading.toLowerCase();
  while ((ownerReading !== 'yes') && (ownerReading !== 'no') && (ownerReading !== 'y') && (ownerReading !== 'n'))
  {
    ownerReading=prompt('Do I love reading books? 📖','yes/y or no/n').toLowerCase();
  }
  if((ownerReading ==='yes')||(ownerReading ==='y')){
    console.log(ownerReading+ 'False');
    alert('I dont like reading');
  }
  else if((ownerReading ==='no')||(ownerReading ==='n')){
    console.log(ownerReading + 'True');
    alert('you are right');
    score++;
  }


};
readFunction(ownerReading);




let ownerSisters = Number(prompt('How many sisters I have?', 'number'));


const sisterFunction = function (sisters)
{
  ownerSisters=sisters;
  while (isNaN(ownerSisters)) {
    ownerSisters = Number(prompt('How many sisters I have?', 'number'));
  }
  for (let i = 0; i < 4; i++) {
    if (ownerSisters === 5) {
      alert('Awesome! Corrtect answer ^_^');
      score++;
      console.log(ownerSisters+ ' correct answer i have 5 sisters');
      break;
    } else if (ownerSisters > 5) {
      alert('too high!');
      ownerSisters = prompt('How many sisters I have?', 'number');}
    else if (ownerSisters < 5){
      alert('too low!');
      ownerSisters = prompt('How many sisters I have?', 'number');
      console.log(ownerSisters+ ' wrong! try again');
    }
  }

  alert('I have 5 sisters 😀');
};
sisterFunction(ownerSisters);



let arr1 = [ 20,1,8,10,4,7];

let guess = Number(prompt('Guess what is my favorite number? 20, 1, 8, 10,4,7'));

const guessFunction = function (guessingGame) {
  guess = guessingGame;


  for (let i = 0; i < 6; i++)
    if (guess === arr1[1]) {
      alert('Awesome! Corrtect answer ^_^');
      score++;
      console.log(guess+' that is true my fav number is 1 ');
      break;
    } else {
      guess = Number(prompt('Guess what is my fav number?', 'number'));
      console.log(guess+ ' try again!');
    }
  alert('My favorite number is 1😀');
};

guessFunction(guess);

alert('Thank you ' + userName + '😇 for being part of this game, your score is: '+ score+ '  out of 7 😎');

console.log('Thank you ' + userName + '😇 for being part of this game, your score is: '+ score+ '  out of 7 😎');
