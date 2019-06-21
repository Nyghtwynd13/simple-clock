//getting it to desplay the current time
function showCurrentTime() {

  var clock = document.getElementById('demo');

  var d = new Date();

  //day of week to string
  var weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  var weekday = weekdays[d.getDay()];

  //month to string
  var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  var month = months[d.getMonth()];

  var day = d.getDate();
  var year = d.getFullYear();

  var hours = d.getHours();
  var minutes = d.getMinutes();
  var seconds = d.getSeconds();
  var meridian = "AM";


  // Set hours
	if (hours >= 12)
	{
	  meridian = "PM";
	}

	if (hours > 12)
	{
    hours = hours - 12;
	}
 
  // Set Minutes
  if (minutes < 10)
  {
    minutes = "0" + minutes;
  }
 
  // Set Seconds
  if (seconds < 10)
  {
    seconds = "0" + seconds;
  }

  
  // put together the string that displays the time
  var clockTime = weekday + ", " + month + " " + day + ", " + year + " - " + hours + ':' + minutes + ':' + seconds + " " + meridian;
 
  clock.innerText = clockTime;
};


// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function() 
{
  showCurrentTime();
};

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval(updateClock, oneSecond);
