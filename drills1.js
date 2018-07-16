'use strict';

function whoAmI(name, age) {
    let yob = yearOfBirth(age);
    try {
        if (!name || !age || typeof name !== 'string' || typeof age !== 'number') {
            throw new Error('Arguments not valid');
        } else if (yob > 2018) {
            throw new Error('Age can not be negative');
        } else {
            console.log(`Hi, my name is ${name} and I'm ${age} years old`);
            console.log(`I was born in ${yob}`);
        }
    } catch (e) {
        console.error(e);
    }
}

function yearOfBirth(age){
    return 2018-age;
 }

whoAmI('john', 21);