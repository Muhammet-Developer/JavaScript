//Construction with a FOR loop

let randomNum = Math.floor(Math.random() * 100);
// console.log( randomNum); //enable to see the system guessed number from the console

for (let chance = 0; chance < 5; ){
    let user= +prompt("Enter numbers between 1-100");
    console.log(user);

if (user==randomNum) {
    console.log(`The number you entered is correct. Number: ${randomNum} `); 
    break;
} 
else if (user<randomNum) {
    console.log(`increase the number`);     
    chance+=1;
}
else if (user>randomNum) {
    console.log("drop the number"); 
    chance+=1;   
}
if (chance==5) {
    console.log(`Could not find the correct number. Correct number: ${randomNum}`);
}
}


// Construction with a WHİLE loop

/*
let randomNum = Math.floor(Math.random() * 100);
//console.log( randomNum); //enable to see the system guessed number from the console
let hak=0;
while ( chance < 5) {
    let user= +prompt("Enter numbers between 1-100");
    console.log(user);
    chance+=1;
if (user==randomNum) {
    console.log(`The number you entered is correct. Number: ${randomNum} `); 
    break;
} 
else if (user<randomNum) {
    console.log(`increase the number`);         
}
else if (user>randomNum) {
    console.log("drop the number");    
}
if (chance==5) {
    console.log(`Could not find the correct number. Correct number: ${randomNum}`);
}
}
*/