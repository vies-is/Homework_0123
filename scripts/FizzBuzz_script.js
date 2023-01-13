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

const numElement1 = document.getElementById("value1").value;
const numElement2 = document.getElementById("value2").value;
const fizzValue = document.getElementById("value3").value;
const buzzValue = document.getElementById("value4").value;

function manyInputElements() {
    const numElement1 = document.getElementById("value1").value;
    const numElement2 = document.getElementById("value2").value;
    parse1 = parseInt(numElement1);
    parse2 = parseInt(numElement2);
    const numInputElements = parse2-parse1+1;
    if ((parse1 <= 0) || (parse2 >= 100)) {
        alert("Please enter a number from 1 to 100");
    } else if (parse1 > parse2) {
        alert("Starting number should be smaller than ending number");
    }   
    manyFizzBuzzes()
}

function manyFizzBuzzes() {
    const numElement1 = document.getElementById("value1").value;
    const numElement2 = document.getElementById("value2").value;
    parse1 = parseInt(numElement1);
    parse2 = parseInt(numElement2);
    const numInputElements = parse2-parse1+1;
    for (i = 0; i< numInputElements; i++) {
        const parentElement = document.getElementById("container");
        const newElement = document.createElement("div");
        const fizzValue = document.getElementById("value3").value;
        const buzzValue = document.getElementById("value4").value;
        newElement.classList.add("new-element");
        parentElement.appendChild(newElement);
        newElement.innerText = parse1 + i;
        buzz = 5; fizz = 3;
        if (parseInt(buzzValue) != buzz) {
            buzz == parseInt(buzzValue);
        }
        if (parseInt(fizzValue) != fizz) {
            fizz == parseInt(fizzValue);
        }
        if ((parse1 + i) % 3 === 0 && (parse1 + i) % 5 === 0){
            newElement.classList.add("fizzbuzz");
            newElement.innerText = "FizzBuzz";
        } else if ((parse1 + i) % fizz === 0) {
            newElement.classList.add("fizz");
            newElement.innerText = "Fizz";
        } else if ((parse1 + i) % buzz === 0) {
            newElement.classList.add("buzz");
            newElement.innerText = "Buzz";
        } 
        if ((parse1 + i) % 2 === 0) {
            newElement.classList.add("even");
        } else {
            newElement.classList.add("odd");
        }
    if ((parse1 <= 0) || (parse2 >= 100)) {
        alert("Please enter a number from 1 to 100");
        removeElement();
    } else if (parse1 >= parse2) {
        alert("Starting number should be smaller than ending number");
        removeElement();
    }
    }
}

function addElementInputs() {
    manyInputElements();

}

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
    const addControlledElementsButton = document.getElementById("addControlledElementsButton");
    addControlledElementsButton.addEventListener("click", addElementInputs);
}

function main() {
    addListeners();
};

document.addEventListener('DOMContentLoaded', main);