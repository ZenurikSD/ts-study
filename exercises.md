**CHATGPT:**
Here are a few programming exercises that focus on JavaScript's data types:

---

### 1. **String Manipulation**

**Exercise**:  
Write a function `reverseString(str)` that takes a string as input and returns the string reversed.

```javascript
function reverseString(str) {
    // Your code here
}

console.log(reverseString("hello")); // Output: "olleh"
```

**Challenge**:  
Extend the function to ignore spaces and punctuation while reversing.

---

### 2. **Array Operations**

**Exercise**:  
Write a function `findMax(arr)` that takes an array of numbers and returns the largest number.

```javascript
function findMax(arr) {
    // Your code here
}

console.log(findMax([3, 6, 2, 8, 5])); // Output: 8
```

**Challenge**:  
Modify the function to return both the maximum and minimum numbers in the array.

---

### 3. **Object Manipulation**

**Exercise**:  
Create a function `countProperties(obj)` that counts the number of properties in an object.

```javascript
function countProperties(obj) {
    // Your code here
}

const sampleObject = {name: "John", age: 25, city: "New York"};
console.log(countProperties(sampleObject)); // Output: 3
```

**Challenge**:  
Modify the function to return an object with the property names as keys and the length of the values (if they are strings or arrays) as values.

---

### 4. **Number Operations**

**Exercise**:  
Write a function `isPrime(num)` that checks if a number is prime.

```javascript
function isPrime(num) {
    // Your code here
}

console.log(isPrime(7));  // Output: true
console.log(isPrime(10)); // Output: false
```

**Challenge**:  
Write a function `findPrimes(limit)` that returns all prime numbers up to the given limit.

---

### 5. **Boolean Logic**

**Exercise**:  
Create a function `isPalindrome(str)` that returns `true` if the string is a palindrome (reads the same forwards and backwards) and `false` otherwise.

```javascript
function isPalindrome(str) {
    // Your code here
}

console.log(isPalindrome("madam"));  // Output: true
console.log(isPalindrome("hello"));  // Output: false
```

**Challenge**:  
Modify the function to ignore case and spaces.

---

### 6. **Array of Objects**

**Exercise**:  
Write a function `getAverageAge(people)` that takes an array of objects (each containing a person's name and age) and returns the average age.

```javascript
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

function getAverageAge(people) {
    // Your code here
}

console.log(getAverageAge(people));  // Output: 30
```

**Challenge**:  
Modify the function to handle an empty array by returning 0.

---

### 7. **Type Checking**

**Exercise**:  
Write a function `typeCheck(variable)` that returns the data type of the given variable (`"string"`, `"number"`, `"boolean"`, etc.).

```javascript
function typeCheck(variable) {
    // Your code here
}

console.log(typeCheck(42));         // Output: "number"
console.log(typeCheck("Hello"));    // Output: "string"
console.log(typeCheck(true));       // Output: "boolean"
console.log(typeCheck([1, 2, 3]));  // Output: "object"
```

**Challenge**:  
Modify the function to distinguish between arrays, null, and objects.

---

These exercises will help you practice working with various data types in JavaScript!