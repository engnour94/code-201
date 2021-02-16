'use strict';

let score=0;
let userName = prompt('Enter your name');
console.log(userName);
alert('Hello '+ userName + '🧡');


let ownerAge= prompt('Do you think that I am over 30 years old?','yes/y or no/n').toLowerCase();
while ( (ownerAge !== 'yes') && (ownerAge !== 'no' ) && (ownerAge !== 'y' ) && (ownerAge !== 'n' ))
{
  ownerAge= prompt('Do you think that I am over 30 years old?','yes/y or no/n').toLowerCase();
}
if((ownerAge ==='yes')||(ownerAge ==='y')){
  console.log('False');
  alert('I am just 26');
}
else if((ownerAge ==='no')||(ownerAge ==='n')){
  console.log('true');
  alert('You are right ^_^');
  score++;
}

let ownerTalent = prompt('Do you think that I have any talents?','yes/y or no/n').toLowerCase();
while ((ownerTalent!== 'yes') && (ownerTalent !== 'no'&& (ownerTalent !== 'y' ) && (ownerTalent !== 'n' )))
{
  ownerTalent = prompt('Do you think that I have any talents?','yes/y or no/n').toLowerCase();
}
if((ownerTalent ==='yes')||(ownerTalent ==='y')){
  console.log('True');
  alert('you are right, I am  an artist and guitarist ^_^ 🎸 🎨 ');
  score++;
}
else if((ownerTalent ==='no')||(ownerTalent ==='n')){
  console.log('False');
  alert('Yoy are wrong, I am  an artist and guitarist ^_^ 🎸 🎨');
}


let ownerMeeting=prompt('Do you want to meet me?','yes/y or no/n').toLowerCase();
while ((ownerMeeting!== 'yes') && (ownerMeeting!== 'no') &&(ownerMeeting!== 'y') && (ownerMeeting!== 'n') )
{
  ownerMeeting=prompt('Do you want to meet me?','yes/y or no/n').toLowerCase();
}
if((ownerMeeting ==='yes')||(ownerMeeting ==='y')){
  console.log('True');
  alert('I am really so lucky for you ^___^');
  score++;
}
else if((ownerMeeting ==='no')||(ownerMeeting ==='n')){
  console.log('False');
  alert('you are the looser 😝 ^_^');
}

let ownerPets=prompt('Do I have any pets?','yes/y or no/n').toLowerCase();
while ((ownerPets !== 'yes') && (ownerPets !== 'no') && (ownerPets !== 'y') && (ownerPets !== 'n'))
{
  ownerPets=prompt('Do I have any pets?','yes/y or no/n').toLowerCase();
}
if((ownerPets ==='yes')||(ownerPets ==='y')){
  console.log('False');
  alert('I dont have any pets but i wish i have a cat 🐈');
}
else if((ownerPets ==='no')||(ownerPets ==='n')){
  console.log('True');
  alert('you are right');
  score++;
}

let ownerReading=prompt('Do I love reading books? 📖','yes/y or no/n').toLowerCase();
while ((ownerReading !== 'yes') && (ownerReading !== 'no') && (ownerReading !== 'y') && (ownerReading !== 'n'))
{
  ownerReading=prompt('Do I love reading books? 📖','yes/y or no/n').toLowerCase();
}
if((ownerReading ==='yes')||(ownerReading ==='y')){
  console.log('False');
  alert('I dont like reading');
}
else if((ownerReading ==='no')||(ownerReading ==='n')){
  console.log('True');
  alert('you are right');
  score++;
}



let ownerSisters = prompt('How many sisters I have?', 'number');
let numSisters = parseInt(ownerSisters);

while (isNaN(numSisters)) {
  numSisters = parseInt(ownerSisters);
}
for (let i = 0; i < 4; i++) {
  if (numSisters == 5) {
    alert('Awesome! Corrtect answer ^_^');
    score++;
    break;
  } else if (numSisters > 5) {
    alert('too high!');
    numSisters = prompt('How many sisters I have?', 'number');}
  else if (numSisters < 5){
    alert('too low!');
    numSisters = prompt('How many sisters I have?', 'number');;
  }
}
alert('I have 5 sisters 😀');

let arr1 = [ '20','1','8','10','4','7'];

let guess = prompt('Guess what is my favorite number? 20, 1, 8, 10,4,7');

for (let i = 0; i < 6; i++)
{
  if (guess === arr1[1]) {
    alert('Awesome! Corrtect answer ^_^');
    score++;
    break;
  } else {
    guess = prompt('Guess what is my fav number?');
  }
}
alert('My favorite number is 1😀');

alert('Thank you ' + userName + '😇 for being part of this game, your score is: '+ score+ '  out of 7 😎');
