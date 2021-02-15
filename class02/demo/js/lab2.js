'use strict';
let userName = prompt('Enter your name');
console.log(userName);
alert('Hello '+ userName);


let ownerAge= prompt('Do you think that I am over 30 years old?','yes or no');
while ((ownerAge === null) || (ownerAge === '') || (ownerAge.toLowerCase() !== 'yes') && (ownerAge.toLowerCase() !== 'no'))
{
  ownerAge= prompt('Do you think that I am over 30 years old?','yes or no');
}
if(ownerAge.toLowerCase() ==='yes'){
  console.log('False');
  alert('I am just 26');
}
else if(ownerAge.toLowerCase() ==='no'){
  console.log('true');
  alert('You are right ^_^');
}

let ownerTalent = prompt('Do you think that I have any talents?','yes or no');
while ((ownerTalent === null) || (ownerTalent === '') || (ownerTalent.toLowerCase() !== 'yes') && (ownerTalent.toLowerCase() !== 'no'))
{
  ownerTalent = prompt('Do you think that I have any talents?','yes or no');
}
if(ownerTalent.toLowerCase() ==='yes'){
  console.log('True');
  alert('you are right I am multi talented');
}
else if(ownerTalent.toLowerCase() ==='no'){
  console.log('False');
  alert('I am  an artist and guitarist ^_^');
}


let ownerMeeting=prompt('Do you want to meet me?','yes or no');
while ((ownerMeeting === null) || (ownerMeeting === '') || (ownerMeeting.toLowerCase() !== 'yes') && (ownerMeeting.toLowerCase() !== 'no'))
{
  ownerMeeting=prompt('Do you want to meet me?','yes or no');
}
if(ownerMeeting.toLowerCase() ==='yes'){
  console.log('True');
  alert('I am really so lucky for you ^___^');
}
else if(ownerMeeting.toLowerCase() ==='no'){
  console.log('False');
  alert('you are the looser ^_^');
}

let ownerPets=prompt('Do I have any pets?','yes or no');
while ((ownerPets === null) || (ownerPets === '') || (ownerPets.toLowerCase() !== 'yes') && (ownerPets.toLowerCase() !== 'no'))
{
  ownerPets=prompt('Do I have any pets?','yes or no');
}
if(ownerPets.toLowerCase() ==='yes'){
  console.log('False');
  alert('I dont have any pets but i wish i have a cat','yes or no');
}
else if(ownerPets.toLowerCase() ==='no'){
  console.log('True');
  alert('you are right');
}






