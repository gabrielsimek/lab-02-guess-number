// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { isNumberCorrect } from '../utils.js';
const test = QUnit.test;
//(randomNum, userNum)
test('should take in two number, userNumber and randomNumber and compare them, return a number based on how they relate', (expect) => {
    const areEqual = isNumberCorrect(20, 20); // 0
    const lessThan = isNumberCorrect(20, 5); // -1
    const greaterThan = isNumberCorrect(0, 2); // 1

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(areEqual, 0, 'both numbers are the same');
    expect.equal(lessThan, -1, 'user number is less than randomNum');
    expect.equal(greaterThan, 1, 'user number is greater than computer number')

});
