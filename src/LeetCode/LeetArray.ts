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
