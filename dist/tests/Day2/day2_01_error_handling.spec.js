"use strict";
function getElementText(elementFound) {
    if (elementFound) {
        console.log("Login succesful");
    }
    else {
        throw new Error("Element not found on page");
    }
}
try {
    getElementText(false);
}
catch (error) {
    console.log("Error: ", error);
}
console.log("Program continues running");
