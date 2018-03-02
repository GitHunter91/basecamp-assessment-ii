// #1 Create an object called 'me' that has three keys, 'firstname' 'age' and 'state'. Assign the keys the appropriate values.

// CODE HERE
var me = {
  firstname:"Hunter",
  age: "26",
  state:"Arizona"};

// #2 Add a new key/value pair to the me object using dot notation. The new key should be 'favecolor' and set it to your favorite color as a string

//CODE HERE
me.favecolor = "purple";

// #3 Below is an object, 'message'. Below it, add a 'text' key using bracket notation and assign it a string of whatever you would like.
//DON'T TOUCH THE CODE BELOW
var message = {
  date: new Date(),
  userName: me.firstname
}
//DON'T TOUCH THE CODE ABOVE
// CODE HERE
message["text"] = "whatever";

// #4 Create an object called 'adjustCount' and create two methods. One called 'upVote' and one called 'downVote'. upVote should take in a number and add one to it and downVote should take in a number and minus one from it.

// CODE HERE
var adjustCount = {
  upVote (num){
     return num + 1;
  },
 downVote (num){
     return num - 1;
 }
};
// #5 Create an array called 'myFriends' with four of your friends names

// CODE HERE
var myFriends = [
  "Randy","Larry","Vincent","Cameron"
];
// #6 Add a fifth friends name to the end of your myFriends array

// CODE HERE
myFriends.push("Zachary");

// #7 Create a 'myArrayCopy' variable. It should equal the myArray variable. Use the built in JavaScript method to create a copy.
//DON'T TOUCH THE CODE BELOW
var myArray = [1,2,3,4]
//DON'T TOUCH THE CODE ABOVE
// CODE HERE
var myArrayCopy = myArray.map(function(element){
  return element;
});
// #8 Below is a array, myNumbers. Create a function called 'evensOnly' that returns the 'evensArray' of only even numbers
//DON'T TOUCH THE CODE BELOW
var myNumbers = [333,1,4,5,511,34,88,77,222]
//DON'T TOUCH THE CODE ABOVE

// CODE HERE
var evensArray = myNumbers.filter(function evensOnly (val){
  return val%2 ===0;
});
// #9 Using filter(), return only your friends of the array of people below. Assign it to a variable called 'trueFriends'.
// CODE HERE
var peopleIknow = [
  { name: "Steve", friend: true },
  { name: "Dan", friend: false },
  { name: "Bart", friend: true },
  { name: "Sarah", friend: false },
  { name: "Michelle", friend: false },
  {name: "Holly", friend: true}
]
var trueFriends = peopleIknow.filter(function(persons){
  return persons.friend===true;
});
// #10 create a function caled indexFinder and loop ove the randomNumbers array below and return a new array called 'indexes' with just their indexes. Be sure to invoke indexFinder.
let randomNumbers = [1,3453,34,456,32,3,2,0]
var indexes = [];
var indexFinder = function(arr){
    for(i=0;i<arr.length;i++){
        indexes.push(i);
    }
    return indexes;
    };
indexFinder(randomNumbers);
