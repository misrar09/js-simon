// 
// Assign 30 sec to those number to disappear
// Create 5 prompts so in each prompt user has to insert those numbers
// Check if te inserted numbers are correct 





//Create 5 random numbers and print them in DOM



function randNumsDisplay() {
    let numbers = []
    for (let i = 0; i < 5; i++) {
        numbers.push(getRndInteger(0, 10));
    }
    document.getElementById("randNums").innerHTML = `Numbers to remember: ${numbers}`
    console.log(numbers);


    setTimeout(function () {
        document.getElementById("randNums").innerHTML = '';
    }, 30000)
}

randNumsDisplay()



//FUNCTIONS
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }


/* const userInput = prompt("insert the number") */

