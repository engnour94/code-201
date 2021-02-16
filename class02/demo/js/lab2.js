'use strict';
let userName = prompt('Enter your name');
console.log(userName);
alert('Hello '+ userName);


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
}

let ownerTalent = prompt('Do you think that I have any talents?','yes/y or no/n').toLowerCase();
while ((ownerTalent!== 'yes') && (ownerTalent !== 'no'&& (ownerTalent !== 'y' ) && (ownerTalent !== 'n' )))
{
  ownerTalent = prompt('Do you think that I have any talents?','yes/y or no/n').toLowerCase();
}
if((ownerTalent ==='yes')||(ownerTalent ==='y')){
  console.log('True');
  alert('you are right I am multi talented');
}
else if((ownerTalent ==='no')||(ownerTalent ==='n')){
  console.log('False');
  alert('I am  an artist and guitarist ^_^');
}


let ownerMeeting=prompt('Do you want to meet me?','yes/y or no/n').toLowerCase();
while ((ownerMeeting!== 'yes') && (ownerMeeting!== 'no') &&(ownerMeeting!== 'y') && (ownerMeeting!== 'n') )
{
  ownerMeeting=prompt('Do you want to meet me?','yes/y or no/n').toLowerCase();
}
if((ownerMeeting ==='yes')||(ownerMeeting ==='y')){
  console.log('True');
  alert('I am really so lucky for you ^___^');
}
else if((ownerMeeting ==='no')||(ownerMeeting ==='n')){
  console.log('False');
  alert('you are the looser ^_^');
}

let ownerPets=prompt('Do I have any pets?','yes/y or no/n').toLowerCase();
while ((ownerPets !== 'yes') && (ownerPets !== 'no') && (ownerPets !== 'y') && (ownerPets !== 'n'))
{
  ownerPets=prompt('Do I have any pets?','yes/y or no/n').toLowerCase();
}
if((ownerPets ==='yes')||(ownerPets ==='y')){
  console.log('False');
  alert('I dont have any pets but i wish i have a cat','yes/y or no/n');
}
else if((ownerPets ==='no')||(ownerPets ==='n')){
  console.log('True');
  alert('you are right');
}






