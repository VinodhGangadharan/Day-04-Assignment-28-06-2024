//Contains solution for both Anonymous and IIFE Functions

//Anonymous & IIFE Function :
//1)Print odd numbers in an array
//2)Convert all the strings to title caps in a string array
//3)Sum of all numbers in an array
//4)Return all the prime numbers in an array
//5)Return all the palindromes in an array
//6)Return median of two sorted arrays of the same size.
//7)Remove duplicates from an array
//8)Rotate an array by k times


//1) Print Odd numbers in an array:

function OddNumberinArray(array)
{
  var temp =[];
for (var i=0; i<array.length;i++)
{
  if(array[i] % 2 !=0)
  {
    temp.push(array[i]);
  }
  
}
return temp;
}
console.log(OddNumberinArray([1,2,3,4,5,6]));


//INPUT  : [1,2,3,4,5,6]
//OUTPUT : [1,3,5]

//-------------------------------------------------------------------------------------------


//2) Convert all the strings to title caps in a string array:

function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
console.log(titleCase("this is title case"));


//INPUT  : "this is title case"
//OUTPUT : "This Is Title Case"

//--------------------------------------------------------------------------------------

//3) Sum of all numbers in an array:


function sum(array)
{
  var sum =0;
for (var i=0; i<array.length;i++)
{
sum = sum + array[i];  
}
return sum;
}
console.log(sum([1,2,3,4,5,6]));


//INPUT  : [1,2,3,4,5,6]
//OUTPUT : 21

//---------------------------------------------------------------------------------------------

//4) Return all the prime numbers in an array:

var a = [5, 9, 63, 29, 35, 6, 55, 23]
var prime = [];

function isPrime(item) {
    var identifier = item / 2;
      for (var j = 2; j <= identifier; j++) {
       if ((item % j) == 0) { // modulous
        return false;
       } 
     }
     return true;
}
for (var index = 0; index < a.length; index++) {
  if (isPrime(a[index])) {
      prime.push(a[index])
  }
}
console.log(prime);

//INPUT  : [5, 9, 63, 29, 35, 6, 55, 23]
//OUTPUT : [5,9,23]

//---------------------------------------------------------------------------------------------------

//5) Return all the palindromes in an array:

function checkPalindrome(arr) {
  var temp =[];
for (var i =0; i<arr.length; i++)
{
    const reversedString = arr[i].split('').reverse().join('');
    if(arr[i] === reversedString)
    {
          temp.push(arr[i]);
    }
    else
        {
        }
}
return temp;
}

console.log(checkPalindrome(["level","else"]));


//INPUT  : ["level","else"]
//OUTPUT : ["level"]

//-----------------------------------------------------------------------------------------------------

//6) Return median of two sorted arrays of the same size:


function findMedianSortedArrays(nums1, nums2) {
const merged = mergeArrays(nums1, nums2);
const n = merged.length;

if (n % 2 === 0) {
const midRight = n / 2;
const midLeft = midRight - 1;
return (merged[midLeft] + merged[midRight]) / 2;
} else {

return merged[Math.floor(n / 2)];
}
}

function mergeArrays(nums1, nums2) {
const merged = [];
let i = 0, j = 0;

while (i < nums1.length && j < nums2.length) {
if (nums1[i] <= nums2[j]) {
merged.push(nums1[i]);
i++;
} else {
merged.push(nums2[j]);
j++;
}
}

while (i < nums1.length) {
merged.push(nums1[i]);
i++;
}

while (j < nums2.length) {
merged.push(nums2[j]);
j++;
}

return merged;
}


const nums1 = [1, 3, 5];
const nums2 = [2, 4, 6];
const median = findMedianSortedArrays(nums1, nums2);
console.log("Median:", median);


//INPUT  : [1, 3, 5]
     //    [2, 4, 6]
//OUTPUT : Median: 3.5

//-----------------------------------------------------------------------------------------------------------

//7) Remove duplicates from an array:

function removeDuplicates(array) {
    var unique = [];
    for (var i = 0; i < array.length; i++) {
        if (unique.indexOf(array[i]) === -1) {
            unique.push(array[i]);
        }
    }
    return unique;
}
console.log(removeDuplicates([1,2,3,2,4,3]));

//INPUT  : [1,2,3,2,4,3]
//OUTPUT : [ 1, 2, 3, 4 ]

//---------------------------------------------------------------------------------------------------------------

//8) Rotate an array by K times:


var arr = [1, 3, 5, 7, 9];
var k = 2;

function rotateArray(arr, k) {
    var n = arr.length;
    if (k === 0) {
        return;
    }

    var temp = arr[n - 1];
    for (let i = n - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = temp;

    rotateArray(arr, k - 1);
}

rotateArray(arr, k);

console.log(arr.join(' '));

//INPUT  : [1, 3, 5, 7, 9]
       //  [2]

//OUTPUT : [ 7 9 1 3 5]

//--------------------------------------------------------------------------------------------------------

//IIFE :

//1) Print Odd numbers in an array:

(function OddNumberinArray(array)
{
  var temp =[];
for (var i=0; i<array.length;i++)
{
  if(array[i] % 2 !=0)
  {
    temp.push(array[i]);
  }
  
}
return temp;
})([1,2,3,4,5,6]);


//INPUT  : [1,2,3,4,5,6]
//OUTPUT : [1,3,5]

//********************************************************************************************************

//2) Convert all the strings to title caps in a string array:

(function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
})("this is title case");


//INPUT  : "this is title case"
//OUTPUT : "This Is Title Case"

//**********************************************************************************************************

//3) Sum of all numbers in an array:

(function sum(array)
{
  var sum =0;
for (var i=0; i<array.length;i++)
{
sum = sum + array[i];  
}
return sum;
})([1,2,3,4,5,6]);

//INPUT  : [1,2,3,4,5,6]
//OUTPUT : 21

//***************************************************************************************************************

//4) Return all the prime numbers in an array:

(function sieveOfEratosthenes(limit) {
    let primes = [];
    let sieve = Array(limit + 1).fill(true);
    sieve[0] = sieve[1] = false; 
    for (let i = 2; i <= Math.sqrt(limit); i++) {
        if (sieve[i]) {
            for (let j = i * i; j <= limit; j += i) {
                sieve[j] = false; 
            }
        }
    }
    for (let i = 2; i <= limit; i++) {
        if (sieve[i]) primes.push(i);
    }
    return primes;
})(10);

//INPUT  : [1,2,3,4,5,6,7,8,9,10]
//OUTPUT : [2,3,5,7]

//*****************************************************************************************************************

//5) Return all the palindromes in an array:

(function checkPalindrome(arr) {
  var temp =[];
for (var i =0; i<arr.length; i++)
{
    const reversedString = arr[i].split('').reverse().join('');
    if(arr[i] === reversedString)
    {
          temp.push(arr[i]);
    }
    else
        {
        }
}
return temp;
})(["level","else"]);


//INPUT  : ["level","else"]
//OUTPUT : ["level"]

//***********************************************************************************************************************

//6) Return median of two sorted arrays of the same size:

(function getMedian(ar1, ar2, n)
{
    var i = 0; 
    var j = 0; 
    var count;
    var m1 = -1, m2 = -1;
    
    for (count = 0; count <= n; count++)
    {    
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }     
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }      
        if (ar1[i] <= ar2[j])
        {
            m1 = m2; 
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2; 
            m2 = ar2[j];
            j++;
        }
    } 
    return (m1 + m2)/2;
})([1, 12, 15, 26, 38],[2, 13, 17, 30, 45],5);

//INPUT  : [1, 12, 15, 26, 38]
         //[2, 13, 17, 30, 45]
//OUTPUT : Median: 16

//*************************************************************************************************************************

//7) Remove duplicates from an array:

(function removeDuplicates(array) {
    var unique = [];
    for (var i = 0; i < array.length; i++) {
        if (unique.indexOf(array[i]) === -1) {
            unique.push(array[i]);
        }
    }
    return unique;
})([1,2,3,2,4,3]);

//INPUT  : [1,2,3,2,4,3]
//OUTPUT : [ 1, 2, 3, 4 ]

//***************************************************************************************************************************

//8) Rotate an array by K times:

(function rotateArray(arr, k) {
    var n = arr.length;
    if (k === 0) {
        return;
    }

    var temp = arr[n - 1];
    for (let i = n - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = temp;

    rotateArray(arr, k - 1);
})([1, 3, 5, 7, 9],2);


//INPUT  : [1, 3, 5, 7, 9], 2

//OUTPUT : [ 7 9 1 3 5]

//************************************************************************************************************