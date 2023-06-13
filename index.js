import name from './capitalize.js'
console.log(name("shrestha"))

//Write a function to check if a string contains only numeric characters.
import isANumber from  './numeric.js'
console.log(isANumber("Hello"))

//Write a function to truncate a string and append ellipsis (...) if it exceeds a specified length.

import text_truncate  from './truncate.js'
console.log(text_truncate ('what are you doing.'))

//Write a function to find and replace a specific word in a sentence with another word.
import newString from './replace.js'
console.log(newString('it is cold','cold','summer'));

//Write a function to check if a string is an anagram of another string (contains the same characters in a different order).
import anagram from './anagram.js'
console.log(anagram('abcd','dbc'));


//Write a function to remove all whitespace from a string.
import result from './whitespace.js'
console.log(result('   this is shrestha    '))

//Write a function to find the longest word in a sentence.
import longest from './longest.js'
console.log(longest('This Summer we went to kedarnath'))

//Write a function to reverse a string without using the built-in reverse() method.
import reverseString from './reverse.js'
console.log(reverseString('HELLO WORLD'))

//Write a function to count the occurrences of a specific character in a string.
import countOccurrences from './occurence.js'
console.log(countOccurrences("fewfwvgerwrg",'f'))

//palindrome
import isPalindrome from './palindrome.js'
console.log(isPalindrome("dad"))