//singleton
//object.create

//object literals

const mySym = Symbol("Key1")


const JsUser = {
    name: "Jai",
    [mySym]: "myKey1",
    age: 18,
    location: "Hyderabad",
    email: "jai@gmail.com",
    isLoggedIn: false,


}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser[mySym])

JsUser.email = "jaibarve@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "hksajjhcchjhsag"
console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello js users");
}
JsUser.greeting2 = function(){
    console.log(`hello js users, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());
