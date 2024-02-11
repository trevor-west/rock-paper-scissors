/* 
BUILDING getComputerChoice FUNCTION:
1. UNDERSTAND

First I will understand the instructions in the first main step from the project page (step 3 in https://www.theodinproject.com/lessons/foundations-rock-paper-scissors):
"Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!""

So I need to make a function called getComputerChoice that returns randomly 'Rock', 'Paper', or 'Scissors

2. PLAN
- No graphical interface is needed -- this will all be done in the console
- I could use Math.Random to associate 33% interval with each of the 3 values ('Rock', 'Paper', 'Scissors') and then use conditionals and boolean checks to return accordingly (randomly).

3. PSEUDOCODE
  1. Create three variables to store the random values precedents for 'Rock', 'Paper' and "Scissors" (the values could be the first value is equal to .33, the next .66, and then last one .99)
  2. Use Math.Random in a loop to check the number generated between 0 and 1 and match against the variables for 'Rock', 'Paper', and 'Scissors' and return the value that meets the defined criteria
    2a. This criteria could be if random value is between 0 and .32 then return Rock, if between .33 and .66 then return Paper, and if between .67 and 1 then return 
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 
      33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 
      67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100
*/

/*
BUILDING getHumanChoice FUNCTION
1. UNDERSTAND

2. PLAN

3. PSEUDOCODE
  1. Get input value from the user (either "Rock", "Papers" or "Scissors" as a string) -- ask the user to type again if they enter anything else (make this case insensitive so you can type "rOck" and it works etc.)

*/