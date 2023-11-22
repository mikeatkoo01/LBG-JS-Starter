

const me = {
    name: "mike"
    age: 36,
    job: "mortgage adviser"
    hobbies: ['games','leeds','footy']
    pets: ['luna']
}

const Patryk = {
    name: "Patryk",
    age: 23,
    job: "Customer Advisor",
    hobbies: ["Games", "Music", "esports"],
    pets: ["Cat","Dog"]
}
const Leo = {
    name: 'Leo',
    age: 35,
    job: 'Support Analyst',
    hobbies: ['Gaming', 'Gym', 'More Gaming'],
    pets: ['Whiskas']
}

console.log("my name", me.name);

const learners = [me,patryk,leo]

    for (const leaner of learners)
{
    console.log(leaner.name);
    
}    