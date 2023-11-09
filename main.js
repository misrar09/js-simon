// 


// Check if te inserted numbers are correct 





//Create 5 random numbers and print them in DOM and Assign 30 sec timer to numbers to disappear

function randNumsDisplay() {
    let numbers = []
    for (let i = 0; i < 5; i++) {
        numbers.push(getRndInteger(0, 10));
    }
    document.getElementById("randNums").innerHTML = `Numbers to remember: ${numbers}`;
    console.log(numbers);


    setTimeout(function () {
        document.getElementById("randNums").innerHTML = '';
    }, 3000)
}

randNumsDisplay();

// Create 5 prompts, in each prompt user has to insert the numbers
function userInputFunc() {
    
    setTimeout(function () {
    
        let userNumber = []
  
        for (let i = 0; i < 5; i++) {
            userInput = parseInt(prompt("insert the number"));  
            userNumber.push(userInput)
        }
        
        console.log(userNumber)      
        document.getElementById("userNums").innerHTML = `User Numbers: ${userNumber}`;

    
    }, 3100)
    
    
}

userInputFunc();





//FUNCTIONS
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }




