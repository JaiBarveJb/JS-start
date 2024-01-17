

function sayMyName(){
    console.log("J");
console.log("A");
console.log("I");
}

sayMyName()

function calculateCartPrice(val1, ...num1){
    return num1
}

console.log(calculateCartPrice(200,3000,440));

const user = {
    username: "jai",
    price: 1000
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

const myNewArray = [200, 388, 87383, 234]

function returnSecondvalue(getArray){
    return getArray[1]
}

console.log(returnSecondvalue(myNewArray))
;