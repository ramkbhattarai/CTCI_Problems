
//  String Compression: Implement a method to perform basic string compression
//  using the counts of repeated characters. 
//  For example, the string aabcccccaaa would become a2blc5a3.
//   If the "compressed" string would not become smaller than the original string,
//  your method should return the original string.
//   You can assume the string has only uppercase and lowercase letters (a - z).

function compress(str){
    let ans = "";
    let count = 0;
    for(let i = 0; i< str.length; i++){
        count++;
        if((i+1 > str.length) || (str[i] !== str[i+1])){
            ans += str[i];
            ans += count.toString();
            count = 0;
        }
    }
    return ans.length < str.length ? ans : str;
}

console.log(compress('aabcccccaaa'));
