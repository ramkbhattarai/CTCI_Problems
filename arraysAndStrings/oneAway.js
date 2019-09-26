/**
 * One Away: There are three types of edits that can be performed on strings:
 *  insert a character, remove a character, or replace a character.
 *  Given two strings, write a function to check 
 * if they are one edit (or zero edits) away.
 * 
 * EXAMPLE
pale, ple ->true 
pales, pale -> true
 pale, bale -> true 
 pale, bae -> false
 */

 function oneAway(s1, s2){
     if(s1.length === s2.length){
         return replace(s1, s2);
     }
     if(s1.length + 1 === s2.length) return edit(s1, s2);
     if(s1.length - 1 === s2.length) return edit(s2, s1);
     return false;
 }

 function replace (first, second){
     let check = false;
     for(let i = 0; i < first.length; i++){
        if(first[i] !== second[i]){
            if(check){
                check = true;
                return false;
            }
        }
     }
     return true;
 }

function edit(first, second) {
    let i = 0;
    let j = 0;
    while(i<first.length && j< second.length){
        if(first[i] !== second[j]){
            if(i !== j){
                return false;
            }
            j++;
        }else{
            i++;
            j++;
        }
    }
    return true;
}





