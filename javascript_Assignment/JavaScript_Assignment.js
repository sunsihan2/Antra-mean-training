// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output: 34223 
const reverseNumber = (number) => parseInt(number.toString().split("").reverse().join("") * Math.sign(number))


// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
function checkPalindrome(str){
    return str== str.split('').reverse().join("")
}

// 3. Write a JavaScript function that generates all combinations of a string. 
// Example string: 'dog' 
// Expected Output: d, do, dog, o, og, g 
function allCombinations(s){
    let res=[]
    for(let i=0; i<s.length; i++){
        for(let j=i+1; j< s.length+1; j++){
            res.push(s.slice(i,j))
        }
    }
    return res
}

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string: 'webmaster' 
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.
function sortAlphabeticalOrder(word){
    return word.split("").sort().join("")
}

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string: 'the quick brown fox' 
// Expected Output: 'The Quick Brown Fox '
function capitalizedWord(word){
    return word.split(" ").map(w => {
        return w[0].toUpperCase() + w.substring(1)
    }).join(" ")
}


// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// Example string: 'Web Development Tutorial' 
// Expected Output: 'Development'
const longestWord = (str) => {
    let strs = str.split(" ").sort((a,b) => a.length - b.length)
    return strs[strs.length-1]
}


// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
// Example string: 'The quick brown fox' 
// Expected Output: 5
function vowelsCounts(str){
    return str.match(/[aeiou]/gi).length
}                                                                                                                                                                                                  

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
const isPrime =(n) => {
    for(let i=2; i< n; i++){
        if(n%i ===0) return false
    }
    return true
}


// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
function argumentType(value){
    return typeof(value)
}

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 
function matrix(n) {
    let res = new Array(n).fill(0)
    for(let i=0; i< n; i++){
        res[i] = new Array(n).fill(0)
    }
    return res
}

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4 
function findSecondNumber(nums){
    res = nums.sort((a,b) => a-b)
    return [res[1], res[res.length-2]]
}


// 12. Write a JavaScript function which says whether a number is perfect. 
// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
const perfectNumber = (num) => {
    let sum =1
    for(let i=2; i< num; i++){
        if (num%i===0)
            sum+=i
    }
    return sum ===n
}


// 13. Write a JavaScript function to compute the factors of a positive integer. 
function computeFactors(n){
    let res=[]
    for(let i=1 ; i< n; i++){
        if(n%i ===0)
            res.push(i)
    }
    return res
}


// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output: 25, 10, 10, 1
function convertToCoins(amount, coins) {
    let res = [];
    for (let i = 0; i < coins.length; i++) {
      for (let j = 0; j < Math.floor(amount / coins[i]); j++)
        res.push(coins[i]);
      amount %= coins[i];
    }
    return res;
  }


// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. 
function exponent (b, n) {
    return b**n
}



// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg"
function extractUniqueCharacters(s){
    let res=""
    for(let char of s){
        if( !res.includes(char)){
            res +=char
        }
    }
    return res
}



// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string. 
function occurencesLetter(str) {
    return str.split("").reduce((arr, letter) => {
        arr[letter] = (arr[letter] || 0) + 1;
        return arr;
    }, {});
}


// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
function binarySearch(arr,num){
    left = 0
    right = arr.length-1

    while(left <= right){
        mid = Math.floor((left+right)/2)
        if(arr[mid]===num){
            return mid
        } else if(arr[mid]>num){
            right = mid-1
        } else {
            left = mid + 1
        }
    }
    return -1
}

// 19. Write a JavaScript function that returns array elements larger than a number. 
function largerNumbers(arr, num){
    return arr.filter(number => number > num)
}

// 20. Write a JavaScript function that generates a string id (specified length) of random characters. 
// Sample character list: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
function generateId(length){
    let res= ""
    let charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    for( let i=0; i< length; i++){
        res += charList.charAt(Math.floor(Math.random() * charList.length))
    }
    return res
}


// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
// Sample array: [1, 2, 3] and subset length is 2 
// Expected output: [[2, 1], [3, 1], [3, 2]]
function possibleSubsets(array, length){
    let res = [];
    let temp = [];

    function backtracking(start){
        if (start === array.length ){
            if (temp.length === length) {
                res.push([...temp]);
            }
            return;
        }
        temp.push(array[start]);
        backtracking(start + 1);
        temp.pop();

        backtracking(start + 1);
    }
    backtracking(0);
    return res;
}

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
// Sample arguments: 'microsoft.com', 'o' 
// Expected output: 3 
function numberOfOccurences(string, letter) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === letter) count++;
    }
    return count;
}



// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments: 'abacddbec' 
// Expected output: 'e' 
function firstNotRepeatedChar(s){
    let map = new Map()
    for(let c of s){
        if(map.has(c))
            map.set(c, map.get(c)+1)
        else
            map.set(c,1)
    }
    for(let c of s){
        if(map.get(c) ===1)
            return c
    }
    return -1
}



// 24. Write a JavaScript function to apply Bubble Sort algorithm. 
// Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order". 
// Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
function bubbleSort(arr){
    for (let i = 0; i < arr.length; i++){
        for (let j = i; j < arr.length; j++){
            if (arr[j] > arr[i]){
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}


// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"
function longestCountryName(arr) {
    var res = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > res.length) {
            res = arr[i];
        }
    }
    return res
}


// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters. 
function longestSubstring(str) {
    let left = 0;
    let right = 0;
    let res = 0;
    let obj = {};
    while (right < str.length) {
      if (obj[str[right]]) {
        left = Math.max(left, obj[str[right]] + 1);
      }
      obj[str[right]] = right;
      res = Math.max(res, right - left + 1);
      right++;
    }
  }


// 27. Write a JavaScript function that returns the longest palindrome in a given string. 
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.
function longestPalindrome(str) {
  var res = "";

  for (var i = 0; i < str.length; i++) {
    for (var j = i; j < str.length; j++) {
      var tempStr = str.substring(i, j + 1);

      if (
        tempStr.length > 1 &&
        tempStr == tempStr.split("").reverse().join("")
      ) {
        if (tempStr.length > res.length) {
          res = tempStr;
        }
      }
    }
  }
  return res;
}
// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 
function foo (cb) {
    cb();
}
function callback() {
    console.log("JavaScript function")
}

foo(callback)

// 29. Write a JavaScript function to get the function name. 
function getFunctionName(fn) {
     return fn.name;
 }