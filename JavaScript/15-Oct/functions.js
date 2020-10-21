// Create a function called oddArray
// that accept an array
// and return an array have only the odd elements 

// var nums= [1,2,3,8,9]

// ** solve it one time using for loop and another using while loop
// **try more cases by your self

/******* Start Your Code *********/
// by for loop 
var arr = [1, 2, 3, 8, 9];
var oddArray1 = (arr) => {
    let newArr = [];
    for (var i in arr) {
        if (arr[i] % 2 == 1) {
            newArr.push(arr[i]);
        }
    }
    return newArr
};
oddArray(arr); // Ex: oddArray(nums) => [1,3,9]

//by while loop

var oddArray2 = (arr) => {
    let newArr = [];
    var i = 0;
    while (i < arr.length) {
        if (arr[i] % 2 == 1) {
            newArr.push(arr[i]);
        }
        i++;
    }
    return newArr
};
oddArray(arr);

/******* End Your Code ********* */



// Create a function called aveArray
// that accept an array
// and return the average of the numbers inside this array

// var nums= [1,2,3,8,9]
// Ex: aveArray(nums) => 4.6

// var nums2= [1,2,3,8,9,77]
// Ex: aveArray(nums) => 16.6

// ** solve it one time using for loop and another using while loop
// **try more cases by your self


/******* Start Your Code *********/
var nums = [1, 2, 3, 8, 9]; //aveArray(nums) => 4.6
var aveArray = (nums) => {
    var sum = 0;
    for (i in nums) {
        sum += nums[i];
    }
    return sum / nums.length;
};
aveArray(nums);

var nums = [1, 2, 3, 8, 9];
var aveArray = (nums) => {
    var sum = 0;
    var i = 0;
    while (i < nums.length) {
        sum += nums[i];
        i++;
    }
    return sum / nums.length;
};
aveArray(nums); //aveArray(nums) => 4.6



/******* End Your Code ********* */


// Create a function called factorial
// that takes a single parameter n,
// and return the product of all integers up to n starting from 1
// Ex: factorial(2); => 2 * 1 => 2
// Ex: factorial(4); => 4 * 3 * 2 * 1 => 24



/******* Start Your Code *********/
var factorial = (num) => {
    if (num < 0)
        return -1;

    else if (num == 0)
        return 1;

    else {
        return (num * factorial(num - 1));

    }
};
factorial(4); // Ex: factorial(4); => 4 * 3 * 2 * 1 => 24



/******* End Your Code ********* */