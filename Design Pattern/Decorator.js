let loggedin = true;

function callIfAuthenticated(fn) {
    return !!loggedin && fn();
}

function sum(a, b) {
    return a + b;
}

console.log(callIfAuthenticated( () => sum(2, 3)));
loggedin = false;
console.log(callIfAuthenticated( () => sum(2, 3)));
loggedin = true;
console.log(callIfAuthenticated( () => sum(2, 3)));