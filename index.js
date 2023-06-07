var findMaxConsecutiveOnes = function(nums) {
    const FIND_NUMBER = 1;

    let countMaxOnes = 0;
    let maxOne = 0;

    for (let i = 0; i < nums.length; i++) {
        if ( nums[i] === FIND_NUMBER ) { 
            countMaxOnes++;
            if ( maxOne < countMaxOnes ) { 
                maxOne = countMaxOnes;
            }
        } else { 
            countMaxOnes = 0;
        }
    }
    return maxOne
};

var findNumbers = function(nums) {
    let counter = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if ( nums[i].toString().length % 2 === 0 ) counter++;
    } 
    
    return counter;
};

var duplicateZeros = function(arr) {
    const LENGTH_ARR = arr.length;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) { 
            arr.splice(i, 0, 0)
            i++;
        }
    }
    arr.splice(LENGTH_ARR)
};
 
var merge = function(nums1, m, nums2, n) {
    for (let i = 0; i < nums1.length; i++) {
        if ( nums1[i] == 0 ) { 
            let index = i
            nums1.splice(index, 1)
        }
    }
    console.log(nums1)
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))