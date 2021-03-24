## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps


General idea: generate random number, user has 4 tries to input correct number, if they get it they win, if they don't in 4 tries they lose

Area for random number to be displayed
    `div.textContent = randomNumber.value`
Input 
    user inputs number
    should be converted to a number from string using Number(div.value)

Button
    to play game
    most of code will be inside button

Area to display instructions

Area to display number of tries

Area to Display if guess is too high or too low

area to display result

Random number between 0-20
    `Math.ceil(Math.random() * 20)`
    declare using `let`

Keep track of number of tries
    use `let`
    (should be inside event listner??? at top)
    On button click
        increment  number of tries
        `numOfTries++`


Add event listener to button
Inside event lister:
    increment number of tries `numOftries++`
    If user used all tries exit function and return 'you lost'
        `if(numOfTries >= 4)  {`
           ` return 'you lose'` (and reset random number??)
        `}`

Compare user input with randomNumber
Need function `correctNumer`
    two parameter  `(guess, and correctNumber)`
    `if (guess === correctNumber)`
    `{return 0 }`//win //

    `if (guess < correctNumber)`
    { return -1} //too low

    if {guess < correctNumber}
    {return 1} //too high

Use function in eventListener
`if (correctNumber(userGuess)) === 0 {
    numOftries++
    return div.output.textContent = 'You Win'
}

if (correctNumber(userGuess) === 0) {
    numOftries++
    output.div.textContent = numOftries.value
}

