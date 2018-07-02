// steps to create this
// have to get current time
// store that in a variable
// every second subtract 1 second from that time
// tell it to stop when it hits 0

function countdowntimer(seconds) {
  // the Date method gets the current date.  The .now method gets the current time.  Note that it is calculated as a number of milliseconds from the date January 1, 1970 00:00:00 UTC.  Note that UTC is not a timezone.  It is a standard.  It stands for Coordinated Universal Time and is the standard for keeping all time coordinated around the world.
  const now = Date.now();

  // this creates a new variable "then" by taking the current time and adding "seconds," the argument we have passed in.  The *1000 is to convert the seconds which will come as milliseconds into seconds.
  const then = now + seconds * 1000;
  
  console.log({now, then});
};

countdowntimer();
