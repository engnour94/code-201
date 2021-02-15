'use strict';
let userName = prompt('Enter your name');
console.log(userName);
alert('Hello '+ userName);
let ownerAge= prompt('Do you think that I am over 30 years old?','yes or no');
console.log(ownerAge);
let age = ownerAge.toLowerCase();

if (age ==='yes')
{ alert('I am just 26');}

if ( age === 'no') {
  alert ('You are right ^_^');
}

let ownerTalent = prompt('Do you think that I have any talents?');
console.log(ownerTalent);
let talent = ownerTalent.toLowerCase();
if(talent ==='yes')
{
  alert('you are right I am multi talented');
}
if(talent==='no'){
  alert('I draw and play guitar ^_^');
}
let ownerMeeting=prompt('Do you want to meet me?');
console.log(ownerMeeting);
let meeting = ownerMeeting.toLowerCase();
if (meeting === 'yes') {
  alert('I am lucky for you');
}
if (meeting==='no') {
  alert('you are the looser ^_^');
}

let ownerPets=prompt('Do I have any pets?');
console.log(ownerPets);
let pets =ownerPets.toLowerCase();
if (pets==='yes') { alert('I dont have any pets but i wish i have a cat');
}
if(pets==='no') {alert ('you are right');}
