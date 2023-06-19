import capitalize from './string/capitalize.js'
console.log('capitalize', capitalize("shrestha"))

//Write a function to check if a string contains only numeric characters.
import numeric from './string/numeric.js'
console.log(numeric("Hello"))

//Write a function to truncate a string and append ellipsis (...) if it exceeds a specified length.

import textTruncate from './string/truncate.js'
console.log(textTruncate('what are you doing.'))

//Write a function to find and replace a specific word in a sentence with another word.
import newString from './string/replace.js'
console.log(newString('it is cold', 'cold', 'summer'));

//Write a function to check if a string is an anagram of another string (contains the same characters in a different order).
import isAnagram from './string/anagram.js'
console.log(isAnagram('abcd', 'acbd'));


//Write a function to remove all whitespace from a string.
import result from './string/whitespace.js'
console.log(result('   this is shrestha    '))

//Write a function to find the longest word in a sentence.
import longest from './string/longest.js'
console.log(longest('This Summer we went to kedarnath'))

//Write a function to reverse a string without using the built-in reverse() method.
import reverseString from './string/reverse.js'
console.log(reverseString('HELLO WORLD'))

//Write a function to count the occurrences of a specific character in a string.
import countOccurrences from './string/occurence.js'
console.log(countOccurrences("fewfwvgerwrg", 'f'))

//palindrome
import isPalindrome from './string/palindrome.js'
console.log(isPalindrome("dad"))

//Write a function to find the maximum number in an array.
import findMax from './array/maximum.js'
console.log(findMax([3, 1, 3, 10]))

//Write a function to find the minimum number in an array.
import findMin from './array/minimum.js'
console.log(findMin([34,8,0]))

//Write a function to calculate the sum of all numbers in an array.
import calculateAverage from './array/average.js'
console.log('sum', calculateAverage([1,2,3,4]))

//Write a function to reverse an array in place (without using the reverse() method).
import reverseArrayInPlace from './array/reverse.js'
console.log(reverseArrayInPlace([1,2,3]))

//Write a function to remove all duplicates from an array.
import removeDuplicates from './array/duplicate.js'
console.log(removeDuplicates([1,1,3,3,3,3,4,6,7,9]))

//Write a function to check if an array is sorted in ascending order.
import isArraySorted from './array/ascending.js'
console.log(isArraySorted([2,5,8,3,6,1,0]))

//Write a function to find the average of all numbers in an array.
//import calculateAverage from './array/average.js'
console.log('average', calculateAverage([8,6,3], true))

//Write a function to return the index of the first occurrence of a given element in an array.
import findIndex from './array/occurence.js'
console.log('index',findIndex([8,45,32,88,1],8))

//Write a function to remove a specific element from an array.
import removeItemFromArray from './array/remove.js'
console.log(removeItemFromArray([1,2,3,4,5],1))

//Write a function to merge two sorted arrays into a new sorted array.
import mergeSortdArray from './array/sorted.js'
console.log(mergeSortdArray([1,2,3,4],[7,6,5,9]))

import calculateSum from './array/sum.js'
console.log(calculateSum([1,2,3]))

//Test if given string is in valid date format
import isValidDate from './regex/validDate.js'
console.log(isValidDate("2023-04-15")); // Output: true
  console.log(isValidDate("15-04-2023")); // Output: false

//Test if given string is a valid URL
import isValidURL from './regex/url.js'
console.log(isValidURL("https://www.geeksforgeeks.org/check-if-an-url-is-valid-or-not-using-regular-expression/"))

//Extract all the numbers from a string
import extractNumbersFromString from './regex/numbers.js'
console.log(extractNumbersFromString("I have 4 apple,3 banana and 6 orange"))

//Extract all the words starting with the letter "S"
import extractletterS from './regex/s.js'
console.log(extractletterS("Shrestha,Viraj"))

//Extract all the hashtags from a string
import extractHashtags from './regex/hashtags.js'
console.log(extractHashtags("I love #coding and #programming."))

//Extract all the words starting with the given letter (take as parameter)
import extractstartingLetter from './regex/startingLetter.js'
console.log(extractstartingLetter("The quick brown fox jumps over the lazy dog.",'j'))

//Replace all occurrences of a word
import replaceOccurence from './regex/occurence.js'
console.log(replaceOccurence("HI THIS IS SHRESTHA","SHRESTHA","ARJUN"))

//Replace all non-alphanumeric characters
import nonAlphanumeric from './regex/nonAlphanumeric.js'
console.log(nonAlphanumeric("Hi!! This. is 'Shrestha';"))

//Test if the password(string) input is a strong password or not
import isStrongPassword from './regex/password.js'
console.log(isStrongPassword("Shrestha8765@"))
