const user = {
  name: "Qasim Asad",
  age: "25",
  city: "san francisco",
  lastActivity: new Date().getTime(),
};

const inactiveFirstStage = () => {
  console.log("User has been inactive for the past 1-2 minutes");
};

const inactiveSecondStage = () => {
  console.log("User has been inactive for the past 3-4 minutes");
};

const inactiveThirdStage = () => {
  console.log("User has been inactive for the past 5-6 minutes");
};

// this is the main method that acts like a worker and runs every 1 minute
setInterval(function () {
  // please write your code here
  let time2 = Math.floor(new Date().getTime());
  let minuteTime = (time2 - user.lastActivity) / 1000 / 60;

  if (minuteTime <= 2) inactiveFirstStage();
  else if (minuteTime <= 4) inactiveSecondStage();
  else if (minuteTime <= 6) inactiveThirdStage();
  else if (minuteTime > 6) user.lastActivity = new Date().getTime();
}, 60000);
