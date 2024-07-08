// using normal function instead of arrow function for hoisting
function getEvenNumbers(limit) {
    //  for iteration until the limit
    for (let i = 0; i <= limit; i++) {
        // checking when i dividing by 2 the remainder is zero
        if (i % 2 === 0) {
            // for displaying even numbers
            console.log(i);
        }
    }
}

// calling function with limit number 11
getEvenNumbers(11)



