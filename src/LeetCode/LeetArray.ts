function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
};

const numbers = [2, 7, 11, 15];
const target = 9;
twoSum(numbers, target);

console.log(twoSum(numbers, target));


//findMedianSortedArrays
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    // Combine both arrays and sort them numerically
    const merged = [...nums1, ...nums2].sort((a, b) => a - b);

    // Check whether the total number of elements is even
    if (merged.length % 2 === 0) {
        const rightIndex = merged.length / 2;
        const leftIndex = rightIndex - 1;

        // Average the two middle values
        return (merged[leftIndex] + merged[rightIndex]) / 2;
    }

    // For an odd length, calculate the middle index directly
    const middleIndex = (merged.length - 1) / 2;

    return merged[middleIndex];
}


// write a function flattenArray that takes a nested array and returns a flattened version of it
function flattenArray(arr: any[]): any[] {
    const result: any[] = [];
    for (const item of arr) {
        if (Array.isArray(item)) {
            result.push(...flattenArray(item));
        } else {
            result.push(item);
        }
    }
    return result;
}

// Max consecutive ones
const conNum = [1,1,0,1,1,1]
const findMaxConsecutiveOnes = (conNum: number[]): number => {
    let currCount = 0
    let maxCount =0
    for (let i = 0; i < conNum.length; i++){
        if (conNum[i] === 1) {
            currCount++
        } else {
            maxCount = Math.max(currCount, maxCount)
            currCount =0
        }
    }
    return Math.max(currCount, maxCount)
}

// Missing number in the array
const findArray = [0, 1, 3, 5, 2]
const findMissingNumber = (findArray: number[]): number => {
    let missingNumber = 0
    let newFind = findArray.sort((a, b) => a - b)
    for (let i = 0; i < newFind.length; i++) {
        if (newFind[i] !== newFind[i - 1] + 1) {
            missingNumber = newFind[i] - 1
        }
    }
    return missingNumber
}

console.log(findMissingNumber(findArray))