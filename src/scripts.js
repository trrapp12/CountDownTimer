// steps to create this
// have to get current time
// store that in a variable
// every second subtract 1 second from that time
// tell it to stop when it hits 0

function countdowntimer(seconds) {
  // tells me countdowntimer() function is getting calculated
  console.log("countdowntimer function is working")

  // the Date method gets the current date.  The .now method gets the current time.  Note that it is calculated as a number of milliseconds from the date January 1, 1970 00:00:00 UTC.  Note that UTC is not a timezone.  It is a standard.  It stands for Coordinated Universal Time and is the standard for keeping all time coordinated around the world.
  const now = Date.now();

  // this creates a new variable "then" by taking the current time and adding "seconds," the argument we have passed in.  The *1000 is to convert the seconds which will come as milliseconds into seconds.
  const then = now + seconds * 1000;

  // the setInterval function calls a function on a set interval it has the following syntax:  setInterval(function() {do something; }, 3000); where setInterval is the set name, function is starting an anonymous function, do something is the action you want it to do, and 3000 would be 3000 milliseconds, or 3 seconds (the amount of time you want to wait inbetween calling the function)
  setInterval( function(){

    // tells me the setInterval function is getting called
    console.log("setInterval is working")

    // creating the secondsLeft variable got rid of the error, which is what we wanted, but now I am noticing that I am getting the same number console.logged.  Looking at it I forgot to change the console.log to reference the right thing.
    // I also noticed from the tutorial that he got the time again.  Trying to figure out why and why we can't just use the first value we got.  For now just going to make the change anyway.
    let secondsLeft = Math.round((then - Date.now()) / 1000);

    while (secondsLeft > 0) {
      // *****  At this point in my code I am getting the following error: "Uncaught TypeError: Assignment to constant variable."  What is happening is that when I set the then-- it is trying to reassign a value to it when I have declared it as a const.  A constant is a value that cannot be altered by the program during normal execution. It cannot change through re-assignment, and it can't be redeclared. So what I will need to do is create a new variable and pass by value of the const to it.
      secondsLeft--;
      document.getElementById('timedisplay').innerHTML = secondsLeft;
      console.log(secondsLeft);
      console.log("while loop is working")
    }
  }, 1000);
};

countdowntimer(10);
