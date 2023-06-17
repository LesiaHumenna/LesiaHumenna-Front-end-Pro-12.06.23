const fruits = prompt('What fruits do you like?');
let arr = fruits.split(',');
console.log(arr);
arr.sort();
while(arr.length >= 4){
arr = arr.slice(1,4);
}
alert(arr.join(', '));

//2 
const array = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
    for(let num of array){
    let sum = array.reduce((accum, num) => {
        if (num > 0 ) {
            return accum + num;
        }
        return accum;
    }, 0);
    console.log(sum);
};
//
let minNum = Math.min(...array);
let minIndex = array.indexOf(minNum);

    console.log(minNum);
    console.log(minIndex);
let maxNum = Math.max(...array);
let maxIndex = array.lastIndexOf(maxNum);
    console.log(maxNum);
    console.log(maxIndex);
//
let negatElem = array.filter(num => num < 0);
    console.log(negatElem);
//
let oddNumb = array.filter(num => num % 2 !==  0 && num > 0);
    console.log(oddNumb);
//
let EvenNumb = array.filter(num => num % 2 === 0 && num > 0);
    console.log(EvenNumb);
//
let sum = array.reduce((accum, num) => {
    if (num > 0 && num % 2 === 0) {
        return accum + num;
    }
        return accum;
}, 0);
    console.log(sum);

//
let productNumb = array.filter(num => num > 0 ).reduce((acc, num) => acc * num);
    console.log(productNumb);
//
let maxItem = Math.max(...array);
let itemNumb = array.filter(num => num === maxItem);
console.log(itemNumb);
for (let i = 0; i < array.length; i++) {
    if (array[i] < maxItem) {
        array[i] = null;
    }
}
console.log(array);