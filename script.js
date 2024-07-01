function updateUTCDateTime() {
    const now = new Date();
    const currentDayElement = document.querySelector('[data-testid="currentDay"]');
    const currentTimeElement = document.querySelector('[data-testid="currentTimeUTC"]');

    // Format the date (day, month, year)
    const dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC'
    };
    const formattedDate = now.toLocaleString('en-US', dateOptions);

    // Format the time
    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'UTC'
    };
    const formattedTime = now.toLocaleString('en-US', timeOptions);

    // Update the DOM
    currentDayElement.textContent = formattedDate;
    currentTimeElement.textContent = formattedTime + ' UTC';
}

// Update date and time immediately and then every second
updateUTCDateTime();
setInterval(updateUTCDateTime, 1000);