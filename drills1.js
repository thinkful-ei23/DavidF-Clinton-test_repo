'use strict';

function whoAmI(name, age) {
    let yob= yearOfBirth(age);
    try {
        if (!name || !age) {
            throw new Error('Arguments not valid');
        } else {
            console.log(`Hi, my name is ${name} and I'm ${age} years old`);
            console.log(`I was born in ${yob}`);
        }
    } catch (e) {
        console.error(e);
    }
    // if (yob === !NaN) {
    //     console.log(`I was born in ${yob}`);
    // } else {
    //     console.log('You haven\'t been born');
    // }
}

function yearOfBirth(age){
    let yob = 2018-age;
    try {
        if (yob > 2018) {
            throw new Error('Age can not be negative');
        } else {
            return yob;
        }
    }
    catch (e) {
        console.log(e);
    }
 }

whoAmI('john', -2);
yearOfBirth(53);