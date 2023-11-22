const me = {
    name: "mike",
    age: 36,
    job: "mortgage adviser",
    hobbies: ["leeds united", "footy"],
    pets: "luna"
}
// name of object that include the data 
const Patryk = {
    name: "Patryk",
    age: 23,
    job: "Customer Advisor",
    hobbies: ["Games", "Music", "esports"],
    pets: ["Cat", "Dog"]
}

const leo = {
    name: "leo",
    age: 35,
    job: "support",
    hobbies: ["Games", "gym", "Music"],
    pets: [],
}

const learners = [me, Patryk, leo];

// to display the name or age//
console.log("My name:", me.name);
console.log("my age", me.age);

for (const students of learners) {
    console.log(students.name,
        students.age,
        students.job,
        students.pets)

}
// this is to change the element of a keu for example age,job//
console.log(me);
me.age = 30;
console.log(me);

// this is to set te oldest person as the value is "0"//
let oldest = { age: 0 }
for (let students of learners) {

    if (students.age > oldest.age) oldest = students;
    console.log("the oldest colleague is", oldest);
}