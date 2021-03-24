export function isNumberCorrect(randomNum, userNum) {
    if (randomNum === userNum) {
        return 0;
    } else if (userNum < randomNum) {
        return -1;
    } else if (userNum > randomNum) {
        return 1;
    }
}