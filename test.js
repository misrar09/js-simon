// Check if the inserted numbers are correct
function compareNumbers(randNumbers, userNumbers) {
    // Identify matches and differences
    const matches = [];
    const differences = [];

    // Copy the arrays to avoid modifying the original arrays
    const randCopy = randNumbers.slice();
    const userCopy = userNumbers.slice();

    // Identify matches
    for (let i = 0; i < userCopy.length; i++) {
        const randIndex = randCopy.indexOf(userCopy[i]);
        if (randIndex !== -1) {
            matches.push(userCopy[i]);
            // Remove the matched numbers from both arrays to avoid duplicate matches
            randCopy.splice(randIndex, 1);
            userCopy.splice(i, 1);
            i--; // Adjust the index after removing an element from userCopy
        }
    }

    // Remaining numbers in randCopy are differences
    differences.push(...randCopy);

    // Remaining numbers in userCopy are also differences
    differences.push(...userCopy);

    // Display the results in the output element
    const outputElement = document.getElementById("output");
    outputElement.innerHTML = `
        <p>Random Numbers: ${randNumbers.join(', ')}</p>
        <p>Matches: ${matches.length > 0 ? matches.join(', ') : 'None'}</p>
        <p>Not Matched: ${differences.length > 0 ? differences.join(', ') : 'None'}</p>
    `;
}


//IF WE WANT A STRICT COMPARISON WITH ALSO THE ARRY POSTION, SO THE USER HAS TO INSERT THE NUMBER IN THE SAME ORDER AS RANDOM NUMBER
// Check if the inserted numbers are correct

/*  function compareNumbers(randNumbers, userNumbers) {
    // Compare the arrays and point out matches and differences
    const matches = [];
    const differences = [];

    for (let i = 0; i < 5; i++) {
        if (randNumbers[i] === userNumbers[i]) {
            matches.push(randNumbers[i]);
        } else {
            differences.push({ random: randNumbers[i], user: userNumbers[i] });
        }
    }

    // Display the results in the output element
    const outputElement = document.getElementById("output");
    outputElement.innerHTML = `
        <p>Matches: ${matches.length > 0 ? matches.join(', ') : 'None'}</p>
        <p>Differences: ${differences.length > 0 ? differences.map(diff => `Random: ${diff.random}, User: ${diff.user}`).join(', ') : 'None'}</p>
    `;
}  */






// Rest of your code remains unchanged


// Rest of your code remains unchanged


// Function to extract numbers from a string
function extractNumbers(str) {
    const numArray = str.match(/\d+/g);
    return numArray ? numArray.map(Number) : [];
}

function randNumsDisplay() {
    let numbers = [];
    for (let i = 0; i < 5; i++) {
        numbers.push(getRndInteger(0, 10));
    }
    document.getElementById("randNums").innerHTML = `Numbers to remember: ${numbers}`;
    console.log(numbers);

    setTimeout(function () {
        document.getElementById("randNums").innerHTML = '';

        // Call the user input function after random numbers display
        setTimeout(userInputFunc, 500, numbers);
    }, 3000);
}

randNumsDisplay();

function userInputFunc(randNumbers) {
    let userNumber = [];

    for (let i = 0; i < 5; i++) {
        userInput = parseInt(prompt("Insert the number"));
        userNumber.push(userInput);
    }

    console.log(userNumber);
    document.getElementById("userNums").innerHTML = `User Numbers: ${userNumber}`;

    // Call the function to compare numbers after user input
    compareNumbers(randNumbers, userNumber);
}

//FUNCTIONS
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
