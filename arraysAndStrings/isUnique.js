/**
 * Is Unique: Implement an algorithm
 *  to determine if a string has all unique characters. 
 * What if you cannot use additional data structures?
 */

 function isUnique(string){
     let check = new Set();
     for(let i = 0; i < string.length; i++){
         check.add(string[i]);
     }
     return check.size === string.length;
 }
 console.log(isUnique('aa'));