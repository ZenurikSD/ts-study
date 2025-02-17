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
let obj1 = {name: 'Alisson', number: 24, somearray: [1,5,2]}

function countProperties(obj: object): object{
    
    //Constrói um objeto vazio que permite fazer "append" de propriedades
    var target_obj: Record<string,any> = {} 

    var obj_keys:string[] = Object.keys(obj);
    var obj_values: any[] = Object.values(obj);

    for (let i = 0; i < obj_keys.length; i++){
        
        if (obj_values[i].length != undefined){
            target_obj[obj_keys[i]] = obj_values[i].length
        } else {
            target_obj[obj_keys[i]] = 1;
        }
    }

    return target_obj;
}
console.log(countProperties(obj1));


// Number operations
function isPrime(num: number): boolean {
    var max = Math.floor(Math.sqrt(num))

    //TO-DO: how?
    //Trial division: tests if a number n is a multiple of any integer between 2 and sqrt(n)
    // Assumindo que se não for, então ele deve ser primo.
    var factors: number[] = []
    var factor = 2;

    while (factor <= Math.sqrt(num)){
        if (num % factor == 0){
            if (num == factor){
                break;
            } else {
                return false;
            }
        }
        factor++;
    }

    
    return true;
}

// Boolean operations
function isPalindrome(text: string): boolean{
    var reversed = "";
    var textNS = "";
    var index_size = text.length - 1;

    for (let i = index_size; i >= 0; i--){
        if (text[i] != " "){
            reversed += text[i];
        }
    }
    
    for (let i = 0; i <= index_size; i++){
        if (text[i] != " "){
            textNS += text[i];
        }
    }

    textNS = textNS.toLowerCase();
    reversed = reversed.toLowerCase();

    if (textNS == reversed)
        return true;
    
    return false;
}

console.log(isPalindrome("Hello"));
console.log(isPalindrome("Madam"));
console.log(isPalindrome("Subi no onibus"));


// Object arrays
const group = [
    {name: "Zenurik", age: 24},
    {name: "Zenith", age: 100},
    {name: "Azimuth", age: 33}
];

function getAverageAge(group: {age: number}[]): number{
    var average = 0;
    
    group.forEach(person => {
        average += person.age;
    })
    
    return average / group.length;
}
console.log(getAverageAge(group).toFixed(2));