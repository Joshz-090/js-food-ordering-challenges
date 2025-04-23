// Remember when we tried to learn about C++, we learned this:
// Write a function that returns an array of numbers from 1 to n.
// For multiples of 3, replace with "Fizz"; multiples of 5, "Buzz";
// and multiples of both, "FizzBuzz".

function fizzBuzz(n) {
    let result = []; // Because JS is dynamic, we can leave it like this
    for (......) { // Try to write this part yourself

        // Okay, now guess which condition should come first

        if (i % 3 === 0) result.push("Fizz");
        else if (i % 3 === 0 && i % 5 === 0) result.push("FizzBuzz");
        else if (i % 5 === 0) result.push("Buzz");

        else result.push(i);
    }
    return result;
}

console.log(fizzBuzz(18));

// Here's one question: What is the type of i?
// Again, what is the type of result?