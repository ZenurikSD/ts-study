
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

function countProperties(obj: object) : object{
    
    //Constrói um objeto vazio que permite fazer append de propriedades
    var target_obj: Record<string,any> = {} 

    var obj_keys:string[] = Object.keys(obj);
    var obj_values: any[] = Object.values(obj);

    for (let i = 0; i < obj_keys.length; i++){

        //Se tiver mais de 1 posição no índice, é um vetor ou string. Então o valor = tamanho
        //Se não, valor = 1
        if (obj_values[1]){
            target_obj[obj_keys[i]] = obj_values[i].length
        } else {
            target_obj[obj_keys[i]] = 1;
        }
    }

    return target_obj;
}
console.log(countProperties(obj1));