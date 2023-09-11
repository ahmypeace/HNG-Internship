// Get elements by their data-testid attributes
const slackUserName = document.querySelector('[data-testid="slackUserName"]');
const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');

// Set your Slack name
slackUserName.textContent = "Amaka Peace";

// Function to update the current day of the week
function updateDayOfWeek() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const dayIndex = currentDate.getDay();
    currentDayOfTheWeek.textContent = daysOfWeek[dayIndex];
}

// Function to update the current UTC time in milliseconds
function updateUTCTime() {
    const currentDate = new Date();
    currentUTCTime.textContent = currentDate.getTime();
}

// Update the day of the week and UTC time initially and then every second
updateDayOfWeek();
updateUTCTime();
setInterval(updateDayOfWeek, 1000); // Update every second
setInterval(updateUTCTime, 1000);   // Update every second
