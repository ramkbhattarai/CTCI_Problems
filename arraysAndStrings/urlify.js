/**
 * URLify: Write a method to replace all spaces in a string with '%20'. 
 * You may assume that the string has sufficient space at the end 
 * to hold the additional characters, 
 * and that you are given the "true" length of the string.
 *  (Note: if implementing in Java, 
 * please use a character array so that you can perform this operation in place.)
EXAMPLE
Input: "Mr John Smith    ", 13 
Output: "Mr%20John%20Smith"
 */

 function urlify(str, trueLength){
     let count = 0;
     let ans = [];
     for(let i = 0; i < trueLength; i++){
         if(str[i] === ' ') count++;
     }
     let index = trueLength + count * 2;
     console.log(index)
     for(let i = trueLength - 1; i >= 0; i--){
         if(str[i] === ' '){
           ans[index - 1] = '0';
             ans[index - 2] = '2';
             ans[index - 3] = '%';
            index = index - 3;
         }else{
             ans[index - 1] = str[i];
             index--;
         }
         //console.log(ans);
     }
     return ans.join("");
 }
console.log(urlify("Mr John Smith    ", 13));