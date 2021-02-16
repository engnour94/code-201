'use strict';
let userName = prompt('Enter your name');
console.log(userName);
alert('Hello '+ userName);


let ownerAge= prompt('Do you think that I am over 30 years old?','yes or no').toLowerCase();
while ( (ownerAge !== 'yes') && (ownerAge !== 'no' ))
{
  ownerAge= prompt('Do you think that I am over 30 years old?','yes or no').toLowerCase();
}
if(ownerAge ==='yes'){
  console.log('False');
  alert('I am just 26');
}
else if(ownerAge ==='no'){
  console.log('true');
  alert('You are right ^_^');
}

let ownerTalent = prompt('Do you think that I have any talents?','yes or no').toLowerCase();
while ((ownerTalent!== 'yes') && (ownerTalent !== 'no'))
{
  ownerTalent = prompt('Do you think that I have any talents?','yes or no').toLowerCase();
}
if(ownerTalent ==='yes'){
  console.log('True');
  alert('you are right I am multi talented');
}
else if(ownerTalent ==='no'){
  console.log('False');
  alert('I am  an artist and guitarist ^_^');
}


let ownerMeeting=prompt('Do you want to meet me?','yes or no').toLowerCase();
while ((ownerMeeting!== 'yes') && (ownerMeeting!== 'no'))
{
  ownerMeeting=prompt('Do you want to meet me?','yes or no').toLowerCase();
}
if(ownerMeeting ==='yes'){
  console.log('True');
  alert('I am really so lucky for you ^___^');
}
else if(ownerMeeting==='no'){
  console.log('False');
  alert('you are the looser ^_^');
}

let ownerPets=prompt('Do I have any pets?','yes or no').toLowerCase();
while ((ownerPets !== 'yes') && (ownerPets !== 'no'))
{
  ownerPets=prompt('Do I have any pets?','yes or no').toLowerCase();
}
if(ownerPets ==='yes'){
  console.log('False');
  alert('I dont have any pets but i wish i have a cat','yes or no');
}
else if(ownerPets ==='no'){
  console.log('True');
  alert('you are right');
}






