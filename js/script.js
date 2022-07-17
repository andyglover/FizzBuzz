// FizzBuzz rules:
// Print numbers from 1 to 100
// If the number is divisible by 3, print "Fizz".
// If the number is divisible by 5 print "Buzz".
// If the number is divisible by 3 and 5, print "FizzBuzz".
// Otherwise, print the number.

let number = 1;
for(i=0;i<100;i++){
    // If the number is divisible by 3 and 5, print "FizzBuzz".
    if(number % 3 == 0 && number % 5 == 0 ){
        console.log("FizzBuzz");
    }
    // If the number is divisible by 3, print "Fizz".
    else if(number % 3 == 0){
        console.log("Fizz");
    }
    // If the number is divisible by 5 print "Buzz".
    else if(number % 5 == 0){
        console.log("Buzz");
    }
    // Otherwise, print the number.
    else{
        console.log(number);
    }
    number++;
}