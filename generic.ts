const fruits:string[]=["Apple","Banana","Mango","Orange","Grapes"];
const numbers: number[]=[1,2,3,4,5];

function getFirstElement<T>(items:T[]):T{
    return items[0];
}

const firstFruit = getFirstElement(fruits);
const firstNumber = getFirstElement(numbers);

console.log(firstFruit.toUpperCase());
console.log(firstNumber);