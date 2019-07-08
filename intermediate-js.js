// Intermediate Javascript Assessments

// 1. Write an arrow function that takes one argument of type array and returns the contents of that array in reverse order.

var originalArray = [1, 2, 3, 4, 5, 6, 7]

const reverseArr = (arr) => {
	var newArr = []
	for(let i = arr.length - 1; i >= 0; i--){
		newArr.push(arr[i])
	}
  return newArr
}
console.log(reverseArr(originalArray));

OR

const reverseArr = (arr) =>{
  return arr.reverse()
}
console.log(reverseArr(originalArray));


// 2. Given the object below, complete the console.log to find specific information:

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}

// Log the type of bicycle:
console.log(bicycle.type)

// Log the bell:
console.log(bicycle.gear[2])

// Log the PSI:
console.log(bicycle.wheels.specs[2])


// 3. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.

var ourString = "Hello Learn Students!"

var ourString = "Hello Learn Students!"
const letterCounter = (str) =>{
  var strArr = str.split('')
  var filterLetters = strArr.filter(value => value.includes("l"))
  return filterLetters.length
}
console.log(letterCounter(ourString));


// 4. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

var getFib = function (n){
	if n(===1){
		return [0,1]
	} else{
		var num = getFib(n-1)
		num.push(num[num.length-1] + num[num.length-2])
		return num
	}
}
console.log(getFib(10))


//5. Write a function called oddChecker that takes in the fullArr and uses a for loop to return a new array of only odd numbers. Copy and paste your code and refactor using ES6 syntax.

var fullArr = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]

const oddChecker = (arr) =>{
  var newArr = []
  for(let i=0;i<arr.length;i++){
    if(typeof(arr[i])=== "number"){
      newArr.push(arr[i])
    }
  }
  return newArr
}
console.log(oddChecker(fullArr));
