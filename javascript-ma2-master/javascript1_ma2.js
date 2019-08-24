//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance

var Girl = function(){
  var name, haircolor, age, profession, nature;
};

var speak = function(invite){
  console.log(invite);
};

Girl.prototype.speak= speak;

firstGirl = new Girl;
firstGirl.name = "Kate";
firstGirl.haircolor = "red";
firstGirl.age = 28;
firstGirl.profession = "therapist";
firstGirl.nature = "compassionate";
firstGirl.speak("Would you like to talk about it?");

secondGirl = new Girl;
secondGirl.name = "Jane";
secondGirl.haircolor = "black";
secondGirl.age = 27;
secondGirl.profession = "Content creator";
secondGirl.nature = "strict";
secondGirl.speak("Come on, you can do this!");

thirdGirl = new Girl;
thirdGirl.name = "Lisa";
thirdGirl.haircolor = "red";
thirdGirl.age = 31;
thirdGirl.profession = "Lumberjack";
thirdGirl.nature = "insecure";
thirdGirl.speak("I dont know.");


//2. Create an array of numbers from 1 - 10; slice the 5th number in the array

var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myArray.slice(4,5));


//3. Delete the last number in the array that you created above.

var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myArray.pop());

//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas:
// Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.

function bananafy(text){
  text = text.replace(/strawberry/gi, "banana");
  text = text.replace(/strawberries/gi, "bananas");
  return text;
}

bananafy('Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes.They announce the impending arrival of the ruby red berries that so many people crave.Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around.There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.');

//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.

//See HTML-file.

//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.

var threePeople = [
  {name: 'Per', haircolor: 'red', age: 15},
  {name: 'Pia', haircolor: 'black', age: 20},
  {name: 'Runar', haircolor: 'brown', age: 25},
];

var names = threePeople.filter(function(name){
  return (name.haircolor === "black");
});
console.log(names);


//7. Create a simple function that logs the date.

function todaysDate() {
  console.log(new Date());
}
