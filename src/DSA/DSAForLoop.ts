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
