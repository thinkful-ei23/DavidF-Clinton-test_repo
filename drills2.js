//Jedi Name
/*
function jediName(firstName, lastName) {
    return lastName.slice(0,3) + firstName.slice(0, 2);
}

console.log(jediName('Beyonce', 'Knowles'));
*/

//To infinity...
/*
function beyond(num) {
   if (Math.abs(num) === Number.POSITIVE_INFINITY) {
       console.log('And beyond');
   } else if (num > 0) {
        console.log('To infinity');
   } else if (num < 0) {
       console.log('To negative infinity');
   } else if (num === 0) {
       console.log('Staying home');
   } else {
       console.log('Please use a number!');
   }
}

beyond(Number.POSITIVE_INFINITY);
beyond(Number.NEGATIVE_INFINITY);
beyond(23);
beyond(-23);
beyond(0);
beyond('rudabega');
*/

//Cracking the Code
/*
function decode(word) {
    let firstChar = word[0];
    if (firstChar === 'a') {
        return word[1];
    } else if (firstChar === 'b') {
        return word[2];
    } else if (firstChar === 'c') {
        return word[3];
    } else if (firstChar === 'd') {
        return word[4];
    } else {
        return ' ';
    }
}

let testArray = ['craft', 'block', 'argon', 'meter', 'bells', 'brown', 'croon', 'droop'];

let decoded = '';

for (let i = 0; i < testArray.length; i++) {
    decoded += decode(testArray[i]);
}

console.log(decode('apple'));
console.log(decode('banan'));
console.log(decode('cranb'));
console.log(decode('david'));
console.log(decode('emmet'));
console.log(decoded);
*/

// How many days in a month
/*
function daysInMonth(month, leapYear) {
    month = month.toLowerCase();
    switch(month) {
        case 'january':
        case 'march':
        case 'may':
        case 'july':
        case 'august':
        case 'october':
        case 'december':
            return `${month.charAt(0).toUpperCase() + month.slice(1)} has 31 days.`;
            break;
        case 'april':
        case 'june':
        case 'september':
        case 'november':
            return `${month.charAt(0).toUpperCase() + month.slice(1)} has 30 days.`;
            break;
        case 'february':
            if (leapYear) {
                return 'February has 29 days.';
            } else {
                return 'February has 28 days.';
            }
            break;
        default:
            return 'Must provide a valid month.';
    }
}

console.log(daysInMonth('August', false));
console.log(daysInMonth('August'));
console.log(daysInMonth('June', true));
console.log(daysInMonth('February', false));
console.log(daysInMonth('February', true));
console.log(daysInMonth('Thinkful', false));
*/