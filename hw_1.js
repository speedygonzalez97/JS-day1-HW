//Exercise #1

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max","HAS","PuRple","dog"];

dog_string = dog_string.toLowerCase();

function findWords(testString,testList)
{
    for(i = 0; i < testList.length; i++)
    {
        checkWord = testList[i].toLowerCase();
        result = testString.includes(checkWord);
    
        if (result == true)
        {
            console.log("Matched dog_name")
        }

         else
        {
            console.log("No Matches")
        }
    }
}

findWords(dog_string,dog_names)



//Exercise #2

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"];
console.log(arr)

function replaceEvens(testArray)
{
    for(i = 0; i < testArray.length; i++)
    {
        if(i % 2 == 0)
        {
            testArray.splice(i,1, "even index")
        }

    }

    console.log(testArray)
}

replaceEvens(arr)



//Codewars problems:


//Problem #1: Count how often sign changes in array.

let arr1 = [1, -3, -4, 0, 5];
let arr2 = [0,2,3,-4,-3,2,-3,0];

function catchSignChange(arr) 
{
   var count = 0;
    
   for (var i = 1; i < arr.length; i++) 
   {
   
        if((arr[i-1] < 0 && arr[i] >= 0) || (arr[i-1] >= 0 && arr[i] < 0)) 
        {
            count++;
        }
      
    }

    console.log(count)
}

catchSignChange(arr1)
catchSignChange(arr2)


/*Problem #2: Given an array of ones and zeroes, convert the equivalent 
binary value to an integer. */

arr1 = [0,0,0,1];
arr2 = [0,1,0,1];
arr3 = [0,0,1,0,1,0,0,0]

function binaryArrayToNumber(arr) {
    let result = 0;
      for (let i = 0; i < arr.length; i++) 
      {
        if (arr[i] === 1)
          result += 1 << arr.length - 1 - i;
      
      }
      console.log(result)
  }

binaryArrayToNumber(arr1)
binaryArrayToNumber(arr2)
binaryArrayToNumber(arr3)


/*Problem #3: Given an array of integers, find the one that appears an odd number of times.
There will always be only one integer that appears an odd number of times. */

var array1 = [7];
var array2 = [0];
var array3 = [1,1,2];
var array4 = [0,1,0,1,0]; 
var array5 = [1,2,2,3,3,3,4,3,3,3,2,2,1];


function findOdd(input) 
{
    for (let i = 0; i < input.length; i++) 
    {
        let occurances = 0;
        for (let j = 0; j < input.length; j++) 
        {
            if (input[i] == input[j]) 
            {
                occurances++;
            }
        }
        if (occurances % 2 == 1) 
        {
            console.log(input[i])
        }       
    }
}

findOdd(array1)
findOdd(array2)
findOdd(array3)
findOdd(array4)
findOdd(array5)


/*Problem #4: Given n, take the sum of the digits of n. 
If that value has more than one digit, continue reducing in this way until
a single-digit number is produced. The input will be a non-negative integer.*/

let w = 16;
let x = 942;
let y = 132189;
let z = 493193;


function digital_root(n) 
{
    if (n < 10)
      return n;
  
    for (var sum = 0, i = 0, n = String(n); i < n.length; i++)
      sum += Number(n[i]);
     
    console.log(digital_root(sum));
}

digital_root(w)
digital_root(x)
digital_root(y)
digital_root(z)
