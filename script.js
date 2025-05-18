function updateClock() {
    const now = new Date();

    //time
    let hours = now.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    // Update the clock and date elements
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    document.getElementById('ampm').textContent = ampm;

    //date
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // Update the date elements
    document.getElementById('day').textContent = days[now.getDay()];
    document.getElementById('date').textContent = now.getDate().toString().padStart(2, '0');
    document.getElementById('month').textContent = months[now.getMonth()];
    document.getElementById('year').textContent = now.getFullYear();

    //timezone
    try {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        document.getElementById('timezone').textContent = timezone;
    } catch (e) {
        console.log("Timezone detection not supported");
    }
}

// Update the clock immediately and then every second
updateClock();
setInterval(updateClock, 1000);
