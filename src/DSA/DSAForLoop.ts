for(let i= 0; i<100; i++){
    console.log(i);
}

const evenArray = [1,5,10,22,6,3,7]

for(let i=0; i< evenArray.length; i++){
   if(evenArray[i] % 2 === 0){
       console.log(evenArray[i]);
   }
}

// write and function to find element in that array and return it's index if not found then return -1
function findElementIndex(arr: number[], target: number): number {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index if the target is found
        }   
    }
    return -1; // Return -1 if the target is not found
}

// write a function that returns the number of -ve numbers in a array
const negativeArray = [1, -23, 45,-8,-9]
function findNegativeNumbers(arr: number[]): number {
    let count = 0
    for (let i = 0; i < arr.length; i++){
        
        if (arr[i] < 0) {
            count = count +1
        }
       
    }
     return count 
}

const negativeCountResult = findNegativeNumbers(negativeArray)
console.log(negativeCountResult)

// write a function to return largest number inside an array

const largArray = [ 3, 40, -20, 23, 99,1, 121]

function getLargestInArray(arr: number[]): number {
    let largest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

// write a function to return least number inside an array
function getSmallestInArray(arr: number[]): number {
    let smallest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}   

// write a function to return duplicate number inside an array without using set
function findDuplicates(arr: number[]): number[] {
    // Store values that are found more than once.
    const duplicates: number[] = [];

    // Select each value in the array.
    for (let i = 0; i < arr.length; i++) {
        // Compare it with every value that comes after it.
        for (let j = i + 1; j < arr.length; j++) {
            // A match means the selected value is duplicated.
            if (arr[i] === arr[j]) {
                // Add the duplicate value to the result.
                duplicates.push(arr[i]);
            }
        }
    }
    return duplicates;
}

// write a function remove duplicate number inside an array without using set
function removeDuplicates(arr: number[]): number[] {
    const unique: number[] = [];

    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < unique.length; j++) {
            if (arr[i] === unique[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            unique.push(arr[i]);
        }
    }
    return unique;
}

// Find second largest number in an array

function getSecondLargest(arr: string | any[]) {
    let largest = -Infinity
    let secLargest = -Infinity
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secLargest = largest
            largest = arr[i];
        }
        else if (arr[i] > secLargest && arr[i] !== largest) {
            secLargest = arr[i]
        }
       
    }
    return secLargest;
}

let arr = [4, 9, 0, 2, 8, 7, 1]

let secondLrResult = getSecondLargest(arr)

console.log(secondLrResult)


// Write a function that returns the count of digits in a number
function countDigits(num: number): number {
    if (num === 0) return 1
    num = Math.abs(num) // Convert to positive number to handle negative inputs
    let count = 0
    while (num > 0) {
        num = Math.floor(num / 10)
        count ++
    }
    return count
}


// write a function to check palindrome of a number using while loop with commets on how it works
function isPalindrome(num: number): void {
    let reverse = 0
    let rem = 0
    let initialNum = num
    while (num > 0) {
        rem = num % 10
        reverse = rem + (10*reverse)
        num = Math.floor(num/10)
    }
    if (reverse == initialNum) {
        console.log("It is palindrome")
    } else {
        console.log("it is not Palindrome")
    }

}

// write a function to reverse an integer
function reverseInteger(num: number): number {
    const sign = num < 0 ? -1 : 1;
    num = Math.abs(num);
    let reversed = 0;
    while (num !== 0) {
        reversed = reversed * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return sign * reversed;
}

// Reverse an integer using string manipulation.
function reverseIntegerWithString(num: number): number {
    const sign = num < 0 ? "-" : "";
    const reversedDigits = Math.abs(num).toString().split("").reverse().join("");
    return Number(sign + reversedDigits);
}
// other way to reverse an integer using string manipulation
const getReverseNumber = (num: number) => {
    let numCopy = num
    let reverse = 0
    num = Math.abs(num)
    while (num > 0) {
        reverse = reverse * 10 + num % 10
        num = Math.floor(num/10)
    }
    let limit = Math.pow(2, 31) // or limit = 2**31
if(reverse < - limit || reverse > limit-1 ) return 0
    return numCopy < 0 ? -reverse : reverse
}

// Remove duplicates in decreasing order
function removeDuplicatesInDecreasingOrder(arr: number[]): number[] {
    const unique: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < unique.length; j++) {
            if (arr[i] === unique[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            unique.push(arr[i]);
        }
    }
    return unique.sort((a, b) => b - a);
}


// Remove duplciates in Decrecing order

const removeDuplicatesDec = (num: number[]): number => {

    let indexVar = 0
    for (let i = 0; i < num.length; i++){
        if (num[i] > num[indexVar]) {
            indexVar = indexVar + 1
            num[indexVar] = num[i]
        }
    }
    return indexVar + 1
}
const inputDuplicateArray = [0, 0, 1, 2, 3, 4, 5, 5, 9, 9, 6,6]
const resultDuplicate = removeDuplicatesDec(inputDuplicateArray)
console.log(resultDuplicate)


// Remove particular elements from array

const removeElements = (num: number[], value: number): number => {
    let indexVar = 0
    for(let i = 0; i<num.length; i++) {
        if (num[i] !== value) {
            num[indexVar] = num[i]
            indexVar = indexVar + 1
}
    }
return indexVar + 1
}

// reverse a string
const getStringReversed = (inputString: string) => {
    const reverseString = inputString.split('').reverse().join('');
    return reverseString
}
 //other way
const reverseString = (s: string): string => {
    let len = s.length
    let halfLen = Math.floor(len / 2)
    const chars = s.split('')
    for (let i = 0; i < halfLen; i++){
        let temp = chars[i];
        chars[i] = chars[len - 1 - i]
        chars[len - 1 - i] = temp
    }
    return chars.join('')
}