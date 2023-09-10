// Getting elements by their data-testid attributes
const slackUserName = document.querySelector('[data-testid="Amaka Peace"]');
const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');

// My Slack name
slackUserName.textContent = "Amaka Peace";

// Getting the current date
const currentDate = new Date();

// Setting the current day of the week
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayIndex = currentDate.getDay();
currentDayOfTheWeek.textContent = daysOfWeek[dayIndex];

// Getting the current UTC time in milliseconds
currentUTCTime.textContent = currentDate.getTime();
