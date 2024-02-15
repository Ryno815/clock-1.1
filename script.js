function updateTime() {
    const now = new Date();
    // Add 1 hour, 31 minutes, and 27 seconds to the current time
    now.setHours(now.getHours() + 0);
    now.setMinutes(now.getMinutes() + 0);
    now.setSeconds(now.getSeconds() + 0);
    
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    let timeOfDay = 'AM';

    if (hours >= 12) {
        timeOfDay = 'PM';
    }

    if (hours > 12) {
        hours -= 12;
    }

    hours = hours === 0 ? 12 : hours;

    const timeString = `${hours}:${minutes}:${seconds} ${timeOfDay}`;
    document.getElementById('clock').textContent = timeString;

    // Update document title
    document.title = timeString;
}

// Update time every second
setInterval(updateTime, 1000);

// Initial call to display the time immediately
updateTime();
