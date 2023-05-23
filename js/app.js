// console.log('Hello World!');
// console.log('you are in the app.js');

// let num = 5;
// let name = 'John';
// let name2 = null;
// let name3 = undefined;
// let objects = {
//     name: "jim",
//     age: 25,
//     name2: "james"
// }

// console.log(num);
// console.log(name);
// console.log(name2);
// console.log(name3);
// console.log(objects);

// let num = -5

// if (num > 0) {
//     console.log('Positive number');
//     if (num > 100) {
//         console.log('You are over 100');
//     }
//     else {
//         console.log('You are under 100');
//     }
// }
// else {
//     console.log('Negative number');
// }
// ----------------------------------------------------------------
// let learner = 32

// if (learner >= 90) {
//     console.log('A');
// }
// else if (learner >= 80) {
//     console.log('B');
// }
// else if (learner >= 70) {
//     console.log('C');
// }
// else if (learner >= 55) {
//     console.log('D');
// }
// else {
//     console.log('F');
// }


// ----------------------------------------------------------------

// let x = 10;

// if (x < 0) {
// 	console.log("Negative!");
// } else {
// 	throw "Error - I don't know what I'm doing.";
// }

// console.log("Does this log?");

// ----------------------------------------------------------------let x = 10;


// try {
// 	if (x < 0) {
// 		console.log("Negative!");
// 	} else {
// 		throw "Error - I don't know what I'm doing.";
// 	}
// } catch (error) {
// 	console.log(error);
// }

// console.log("Does this log?");

// // ----------------------------------------------------------------

let x = -10;

try {
	if (x > 0) {
		let isEven = (x % 2 == 0) ? true : false;
        console.log(isEven);
	} else if (x <= 0) {
		throw "Error - Value of 0 or below.";
	}

} catch (err) {
	console.log(err);
} finally {
	console.log(x);
}