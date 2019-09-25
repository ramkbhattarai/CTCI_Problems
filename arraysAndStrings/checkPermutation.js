/**
 * Check Permutation: 
 * Given two strings, write a method to decide if one is a permutation of the other.
 */

 function check(s1, s2){
     if(s1.length !== s2.length) return false;
     let test = new Set();
     for(let i = 0; i < s1.length; i++){
         test.add(s1[i]);
     }

     for (let i = 0; i < s2.length; i++) {
        if( !test.has(s2[i])){return false;}
     }
     return true;
 }