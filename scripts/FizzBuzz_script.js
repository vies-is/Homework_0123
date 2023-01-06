console.log("FizzBuzz_script.js loaded");

function addElement() {
    const parentElement = document.getElementById("container");
    const newElement = document.createElement("div");
    newElement.classList.add("new-element");
    const numElements = parentElement.childElementCount+1;
    if ((numElements % 3) == 0 && (numElements % 5) == 0 && (numElements !==0 )) {
            newElement.classList.add("fizzbuzz"); 
            newElement.innerText = "FizzBuzz";
    } else if ((numElements % 3) == 0 && (numElements !==0 )) {
            newElement.classList.add("fizz");    
            newElement.innerText = "Fizz";
    } else if ((numElements % 5) == 0 && (numElements !==0 )) {
            newElement.classList.add("buzz");
            newElement.innerText = "Buzz";
    } else { newElement.innerText = `${numElements}`;
        }  
    if (numElements % 2 === 0) {
        newElement.classList.add("even");
    } else {
        newElement.classList.add("odd");
    } 
    parentElement.appendChild(newElement);
}

     
//  const numElements = document.getElementById("value").value;
//     parse = parseInt(numElements);
 

function addElements() {
    for (i = 0; i<100; i++) {
        addElement();
    }
}

function addManyElements() {
    addElements();
}

function removeElement() {
    const parentElement = document.getElementById("container");
    const lastChild = parentElement.lastElementChild;
        if (lastChild === null) {
           return;
        } else {
            parentElement.removeChild(lastChild);
        }
}  

function removeAllElements() {
    const parentElement = document.getElementById("container");
    let lastChild = parentElement.lastElementChild;
    while (lastChild !== null) {
        parentElement.removeChild(lastChild);
        lastChild = parentElement.lastElementChild;
    }
}

function removeOddElements() {
    const parentElement = document.getElementById("container");
    const oddElements = parentElement.querySelectorAll(".odd");
    for (const oddElement of oddElements) {
        parentElement.removeChild(oddElement);
    }
}

function removeEvenElements() {
    const parentElement = document.getElementById("container");
    const evenElements = parentElement.querySelectorAll(".even");
    for (const evenElement of evenElements) {
        parentElement.removeChild(evenElement);
    }
}

function addListeners() {
    const addButton = document.getElementById("addButton");
    addButton.addEventListener("click", addElement);
    const removeButton = document.getElementById("removeButton");
    removeButton.addEventListener("click", removeElement);
    const removeAllButton = document.getElementById("removeAllButton");
    removeAllButton.addEventListener("click", removeAllElements);
    const addElementsButton = document.getElementById("addElementsButton");
    addElementsButton.addEventListener("click", addManyElements);
    const removeEvensButton = document.getElementById("removeEvensButton");
    removeEvensButton.addEventListener("click", removeEvenElements);
    const removeOddsButton = document.getElementById("removeOddsButton");
    removeOddsButton.addEventListener("click", removeOddElements);
}

function main() {
    addListeners();
//   const btn = document.querySelector('button');
//     btn.addEventListener('click', () => {
//     const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//     document.body.style.backgroundColor = rndCol;
//     });
//   const resetButton = document.querySelector('.reset-button');
//     resetButton.addEventListener('click', resetGen);  
//   //para.addEventListener('click', updateName);
//   //displayFizzBuzz();
//   //addElement();
};

document.addEventListener('DOMContentLoaded', main);


// function random (number) {
//   return Math.floor(Math.random() * (number+1));
// };

// function resetGen() {
//   document.body.style.backgroundColor = 'white';
// };


// function addElement() {
//   const parentElement = document.getElementById("container");
//   const newElement = document.createElement("div");
//   newElement.classlist.add("new-element");
//   newElement.innerText = "Hello World";
//   parentElement.appendChild(newElement);
// }

// const addButton = document.getElementById("addButton");
// addButton.addEventListener("click", addElement);

// function displayFizzBuzz() {
//   const numberFizz = document.querySelector('.numberFizz');
//   const numberBuzz = document.querySelector('.numberBuzz');
//   const numberInputs = document.querySelector('.numeric-input');
//   const input = parseInt(numberFizz.value, numberBuzz.value);
//   const myContainer = document.querySelector('.container-div');
//   myContainer.textContent = `${input}`;
// };
 
// const numberNodeList = document.querySelectorAll('.numeric-input');

// const numberArray = Array.from(numberNodeList);

// for (const numberInput of numberArray) {
//   numberInput.addEventListener('change', displayFizzBuzz);
// };


// function handleNumberInput() {
//   const input = document.querySelector('.numberFizz');
//   
// }

//const para = document.querySelector('p');


// //function updateName() {
//   const name = prompt('Enter a new name');
//   para.textContent = `Player 1: ${name}`;
// }




// console.log(10 % 3); // 1
// console.log(10 % 2); // 0


// input = parseInt(input) //
// console.log (`${input}`) //
// while (isNaN(input)) || input > 1 || input <101 { //
//   input = prompt("Wrong input. Please enter a number between 1 and 100"); //
//  input = parseInt(input);
// console.log (`${input}`); //
// } 
// let. container = document.qyerySelector(".container"); 
// container.textContent = input;

// let i = 0;
// const whileLoopElement = document.getElementById("while-loop");
// while (i < 10) {
//   console.log(i);
//   whileLoopElement.textContent += i;
//   i++;
// }

// let i = 0;
// const forLoopElement = document.getElementById("for-loop");
// while (i < 10) {
//   console.log(i);
//   forLoopElement.textContent += i;
//   i++;
// }

// const myArray  = [];
// for (let element of myArray) {
//   console.log(element);
// }

// function sayHello() {
//   for (let i = 0; i < 10; i++) {
//     console.log("Hello World");
//   }
// }

// sayHello();