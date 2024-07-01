function updateUTCTime() {
    const now = new Date();
    const utcTimeElement = document.querySelector('[data-testid="currentTimeUTC"]');
    const utcDayElement = document.querySelector('[data-testid="currentDay"]');

    // Format the time
    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'UTC'
    };
    const formattedTime = now.toLocaleTimeString('en-US', timeOptions);

    // Get the day of the week
    const days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
    const dayOfWeek = days[ now.getUTCDay() ];

    // Update the DOM
    utcTimeElement.textContent = formattedTime + ' UTC';
    utcDayElement.textContent = dayOfWeek;
}

// Update time immediately and then every second
updateUTCTime();
setInterval(updateUTCTime, 1000);