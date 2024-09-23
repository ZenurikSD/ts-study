
//String manipulation (Challenge: ignore spaces and punctuation)
/** Inverte um texto, removendo espaços e pontuação usando regex */ 
function reverseString(txt: string) : string{
    var reversedString = '';

    txt = txt.replace(/[\s\W]+/g, '')
    
    for(let i=txt.length-1; i>=0; i--){
        reversedString += txt[i]
    }
    return reversedString;
}
console.log(reverseString('Hello world! . ; ? ~ !@#$%%'));


// Array operations (CHALLENGE: find min and max)
/** Retorna uma tupla com os números mínimo e máximo */
function findMinMax(array: number[]): [number, number]{
    var min = array[0];
    var max = 0;
    
    for (let i of array){
        if (i > max){
            max = i;
        } else if (i <= min){
            min = i;
        }
    }

    return [min, max];
}
console.log(findMinMax([55, 3, 2, 6, 123, 124, 12.5, 1]));


// Object Manipulation
let obj1 = {name: 'Alisson', number: 24}
function countProperties(obj: object) : number{
    var propcount = 0;

    for (let prop in obj){
        propcount ++;
    }

    return propcount;
    //Alternativa melhor
    //return Object.keys(obj).length;
}
console.log(countProperties(obj1));