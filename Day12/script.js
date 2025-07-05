//Function with If Else
function checkAge(age) {
    if (age >= 18) {
        console.log("You are an adult.")
    } else {
        console.log("You are a minor.")
    }
}

checkAge(20);
checkAge(16);

//Function with multiple conditions (If Else & Else if)
function gradeStudent(score) {
    if (score >= 90) {
        console.log("Grade: A");
    } else if (score >= 80) {
        console.log("Grade: B");
    } else if (score >= 70) {
        console.log("Grade: C");
    } else {
        console.log("Grade: F");
    }
}

gradeStudent(85);

//Function returning a Value
function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(4));
console.log(isEven(7));

//Check if a number is positive, Negative or zero
function checkNumber(num) {
    if (num > 0) {
        console.log("Positive number");
    } else if (num < 0) {
        console.log("Negative number");
    } else {
        console.log("Zero");
    }
}

checkNumber(10);
checkNumber(-5);
checkNumber(0);

//