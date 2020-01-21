const assert = require("assert");

// Feel free to look things up online!

// TODO - write a function which converts a multi-word string into an array of words
const tokenize = str => {
    return str.split(' ');
};

// TODO - write a function which reverses the string
const reverse = str => {
    return str.split('').reverse().join('');
};

// TODO - write a function which returns the inputted array without duplicate elements
const uniqueOnes = arr => {
    const set = new Set(arr);
    return [...set];
};

// TODO - write a function which returns the factorial of a positive integer
const factorial = num => {
    if (num <= 0){
        return null;
    }else if (num === 1){
        return num;
    }else{
        return num * factorial(num-1);
    }
};

// TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
// if the two arrays are of unequal length
// Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
const zip = (arr1, arr2) => {
    if (arr1.length != arr2.length){
        return -1;
    }

    final = [];

    for (let i = 0; i < arr1.length; i++){
        element = [arr1[i], arr2[i]];
        final.push(element);
    }

    return final;
};

// TODO - Write a function which does the opposite of `zip()`
const unzip = arr => {

    const final = [];

    for (let j = 0; j < arr[0].length; j++){

        const element = [];

        for (let i = 0; i < arr.length; i++){
            element.push(arr[i][j]);
        }

        final.push(element);
    }

    return final;
};

// TODO - write a function which shifts a string `num` characters to the right
// Example = shiftThree("Hello") === "lloHe"
const shiftRight = (str, num) => {
    const shift = num % str.length;
    return str.substring(str.length - shift) + str.substring(0, str.length - shift);
};

// TODO - write a function which returns the current date in the following format:
// "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
const announceDate = () => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const hours = ['twelve', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven'];
    const nums = ['', '-one', '-two', '-three', '-four', '-five', '-six', '-seven', '-eight', '-nine'];
    const teens = [' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'];
    const date = new Date();
    
    let suffix1 = '';
    if (date.getDate() === 1){
        suffix1 = 'st';
    }else if (date.getDate() === 2){
        suffix1 = 'nd';
    }else{
        suffix1 = 'th';
    }

    let suffix2 = '';
    if (date.getHours() < 12){
        suffix2 = ' in the morning.';
    }else if (date.getHours() > 18){
        suffix2 = ' at night.';
    }else{
        suffix2 = ' in the afternoon.'
    }

    let minute = '';
    const mins = date.getMinutes();
    if (mins === 0){
        minute = '';
    }else if (mins < 10){
        minute = ' oh ' + hours[mins];
    }else if (mins < 20){
        minute = teens[mins % 10];
    }else if (mins < 30){
        minute = ' twenty' + nums[mins - 20];
    }else if (mins < 40){
        minute = ' thirty' + nums[mins - 30];
    }else if (mins < 50){
        minute = ' forty' + nums[mins - 40];
    }else{
        minute = ' fifty' + nums[mins - 50];
    }

    const part1 = `Today's date is ${months[date.getMonth()]} ${date.getDate()+ suffix1}, ${date.getFullYear()}. `;
    const part2 = `It is ${hours[date.getHours() % 12] + minute + suffix2}`;

    return part1 + part2;

};

// Write tests here:
assert(1 < 2);
assert(1 + 2 === 3);
assert([2, 3][0] === 2);

// console.log(tokenize('This is a string.'));

// console.log(reverse('absolutely'));

// console.log(uniqueOnes(['I', 'am', 'am', 'a', 'cat']));
// console.log(uniqueOnes([1,2,3,4,1,2,5,6,7]));

// console.log(factorial(8));

// console.log(zip([4, 5, 6], [8, 10, 12]));

// console.log(unzip([[3, 4], [4, 5], [5, 6]]));

// console.log(shiftRight('Hello', 3));

// console.log(announceDate());