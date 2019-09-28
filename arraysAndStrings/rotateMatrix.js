/**
 * Rotate Matrix: Given an image represented by an NxN matrix,
 *  where each pixel in the image is 4 bytes, 
 * write a method to rotate the image by 90 degrees.
 *  Can you do this in place?
 */

 function rotate(arr){
     let n = arr.length;
     if(n === 0 || n !== arr[0].length) return false; // checks either empty arr 
     // or rectangular arr ie not square arr
     for(let layer = 0; layer < n / 2; layer++){ // we have to go half way deep
        // in 2D array to rotate each and every elements in the array.

        let first = layer; // setting outermost layer or starting point
        let last = n -1 -layer; // setting ending point
        for(let i = first; i< last; i++){ // from starting point to ending point
            let offset = i - first; // shift in the position of elements

            let top = arr[first][i]; // from starting index and rest index in same array
             
            // top <= left; replace leftmost element to topmost 

            arr[first][i] = arr[last - offset][first];

            // left <= bottom 

            arr[last - offset][first] = arr[last][last-offset];

            // bottom <= right
            arr[last][last - offset] = arr[i][last];

            // right <= top;
            arr[i][last] = top;
        }
     }
     return true;
 }
 console.log(rotate([1]));
 console.log(rotate([
     [1,2],[1,2]
 ]));
 console.log(rotate([
     [1,2,3],[1,2,3]
 ]));