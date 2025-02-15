document.addEventListener('DOMContentLoaded', (event) => {
    let easy = document.querySelector('#easy');
    let medium = document.querySelector('#medium');
    let hard = document.querySelector('#hard');
    let startButton = document.querySelector('#startButton');
    let numberInput = document.querySelector('#number');
    let attempts = 0;
    let maxAttempts = 0;

    easy.addEventListener('click', () => {
        let newnode = document.createElement('p');
        newnode.innerText = 'Easy mode selected and u have 3 attempts';
        document.body.appendChild(newnode);
        maxAttempts = 3;
        attempts = 0; 
    });

    medium.addEventListener('click', () => {
        let newnode = document.createElement('p');
        newnode.innerText = 'Medium mode selected and u have 5 attempts';
        document.body.appendChild(newnode);
        maxAttempts = 5;
        attempts = 0;
    });

    hard.addEventListener('click', () => {  
        let newnode = document.createElement('p');
        newnode.innerText = 'Hard mode selected and u have 7 attempts';
        document.body.appendChild(newnode);
        maxAttempts = 7;
        attempts = 0; 
    });

    startButton.addEventListener('click', () => {
        if (attempts < maxAttempts) {
            CheckNumber();
            attempts++;
        } else {
            alert('You have reached the maximum number of attempts');
            startButton.disabled = true;
            numberInput.disabled = true;
        }
    });

    numberInput.addEventListener('input', () => {
        let value = numberInput.value;
        if (isNaN(value)) {
            numberInput.value = value.slice(0, -1);
            alert('Please enter a valid number');
        }
    });
});

function CheckNumber() {
    let number = document.getElementById('number').value;
    let randomnumber = generateRandomNumber(1, 100);
    if (number == randomnumber) {
        alert('You won');
    } else if (number > randomnumber) {
        alert('Too high');
    } else {
        alert('Too low');
    }
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}