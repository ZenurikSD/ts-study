
//String manipulation
function reverseString(string: string) : string{

    var reversedString = '';

    for(let i=string.length-1; i>=0; i--){
        reversedString += string[i]
        
    }
    return reversedString;
}
console.log(reverseString('Hello'));


// Array operations
function findMax(array: number[]): number{
    var max = 0;
    for (let number of array){
        if (number > max){
            max = number;
        }
    }

    return max;
}
console.log(findMax([0, 3, 2, 6, 123, 124, 12.5, 1]));