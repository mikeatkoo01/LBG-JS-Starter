

for (let i = 1; i <= 10; i++) {
    console.log("Hello, World!");
    //loop to be dipslayed 10 times in incrments of +1
} 

let arr = ['1', '2', '3', '4', '5','6','7','8','9','10'];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);


for (let i = 0; i < arr.length; i++)
{console.log(arr[i]);

}

for (let i = 0; i < arr.length; i++) {
    console.log; 
    
    if ((arr[i])% 5 === 0 && (arr[i]) % 3 === 0)

        console.log("fizz buzz");


    else if ((arr[i]) % 5 === 0) console.log("buzz");

    else if ((arr[i]) % 3 === 0) console.log("fizz");

    else {
    console.log("mate dont be stupid");
    }

}
// loop of a 100 in 1 inc = mult of 5 & mult of 3 

for (let i = 0; i <= 100; i++) {
    console.log; if (i % 5 === 0 && i % 3 === 0)

        console.log("fizz buzz");


    else if (i % 5 === 0) console.log("buzz");

    else if (i % 3 === 0) console.log("fizz");

    else {
        console.log("mate dont be stupid");
    }

}
