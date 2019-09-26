/**
 * Palindrome Permutation: Given a string, write a function to check 
 * if it is a permutation of a palindrome. 
 * A palindrome is a word or phrase that is the same forwards and backwards.
 *  A permutation is a rearrangement of letters.
 *  The palindrome does not need to be limited to just dictionary words.
 * EXAMPLE
Input: Tact Coa
Output: True (permutations: "taco cat'; "atc o eta·; etc.)
 */

 function check(str){
    let count = 0;
     const alphabet = { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0 }
     for(let i =0; i< str.length; i++){
         if(str[i] !== " "){
            alphabet[str[i]]++;
         }
     }
     
     for(let i in alphabet){
         
         if(alphabet[i] % 2 !== 0) count++;
     }
    
     
    return count === 1;
 }
 console.log(check("tact coa"));