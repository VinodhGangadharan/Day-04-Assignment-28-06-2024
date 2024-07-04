//Contains solution for Arrow Functions

//1)Print odd numbers in an array
//2)Convert all the strings to title caps in a string array
//3)Sum of all numbers in an array
//4)Return all the prime numbers in an array
//5)Return all the palindromes in an array



//1) Print Odd numbers in an array:

const array = [1 , 2, 4, 9, 12, 13, 20];
const oddNumbers = [];
array.forEach((num) => num % 2 === 1 && oddNumbers.push(num));
console.log(oddNumbers);

//INPUT  : [1 , 2, 4, 9, 12, 13, 20]
//OUTPUT : [1,9,13]

//**************************************************************************************************

//2) Convert all the strings to title caps in a string array:

const str = "check title case";
let titleCase1 = "";
str.split(" ").forEach(word => {
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    titleCase1 += capitalizedWord + " ";
});
console.log(titleCase1);

//INPUT  : "check title case"
//OUTPUT : "Check Title Case"

//*****************************************************************************************************


//3) Sum of all numbers in an array:

const sumarray = [23, 34, 77, 99, 324];
let sum1 = 0;
sumarray.forEach((el) => sum1 += el);
console.log(sum1);

//INPUT  : [23, 34, 77, 99, 324]
//OUTPUT : 557

//****************************************************************************************************

//4) Return all the prime numbers in an array:


var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(numArray);


//INPUT  : [2, 3, 4, 5, 6, 7, 8, 9, 10]
//OUTPUT : [2,3,5,7]

//*****************************************************************************************************


//5) Return all the palindromes in an array:

const arr1 = ['carecar', 1344, 12321, 'did', 'cannot'];
const isPalindrome = el => {
   const str = String(el);
   let i = 0;
   let j = str.length - 1;
   while(i < j) {
      if(str[i] === str[j]) {
         i++;
         j--;
      }
      else {
         return false;
      }
   }
   return true;
};
const findPalindrome = arr1 => {
   return arr1.filter(el => isPalindrome(el));
};
console.log(findPalindrome(arr1));


//INPUT  : ['carecar', 1344, 12321, 'did', 'cannot']
//OUTPUT : [ 12321, 'did' ]

//**********************************************************************************************************