//singleton

// const tinderUser = new Object() //singleton object
const tinderUser = {}

tinderUser.id = "123"
tinderUser.name = "jai"
tinderUser.isLoggedIn = false
console.log(tinderUser)


const regularUser = {
    email: "jai@gmail.com",
    fullname: {
        userfullname:{
            firstname: "jai",
            lastname: "barve"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

const cousre = {
    coursename: "js",
    price:"1000",
    courseInstructor: "hitesh"


}

const{courseInstructor: instructor} = cousre

console.log(instructor);

// {
//     "coursename": "js",
//     "price":"1000",
//     "courseInstructor": "hitesh"
// } JSON