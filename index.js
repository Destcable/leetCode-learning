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

// var merge = function(nums1, m, nums2, n) {
//     const itemRemove = 0;
    
//     const filterArrOne = nums1.filter((item) => item !== itemRemove);
//     const filterArrTwo = nums2.filter((item) => item !== itemRemove);

//     let resultArr = [ ...filterArrOne, ...filterArrTwo];

//     resultArr.sort();
//     resultArr.splice( m + n );
    
//     nums1 = resultArr
// };

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))