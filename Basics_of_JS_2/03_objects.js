// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "John",
    "full name": "John ",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "John@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


JsUser.email = "John@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "John@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());