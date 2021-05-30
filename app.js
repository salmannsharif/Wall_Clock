console.log('Creating Clock --> by Salman');// Sample text to see js file working or not..,


function updateClock()
{

    // Get the current date 
    let currentTime= new Date();

    // Extract hours , minutes , seconds from date 
    let currentHour= currentTime.getHours();
    let currentMinutes= currentTime.getMinutes();
    let currentSeconds= currentTime.getSeconds();

    // if minutes and seconds less than 10 pad 0 (single digit)
    currentMinutes=(currentMinutes<10 ? '0': '')+currentMinutes;
    currentSeconds=(currentSeconds<10 ? '0' : '')+currentSeconds;

    // converting railway clock AM/PM clock
    currentHour=(currentHour>12) ? currentHour-12 :currentHour;
    currentHour=(currentHour==0) ? 12: currentHour;
 
    // Set the time AM or PM of the day
    let timeOfDay= (currentHour < 12) ? 'AM' :'PM';

    // Set hour , minutes , seconds 
    let currentTimeStr=currentHour+":"+currentMinutes+":"+currentSeconds
        +""+timeOfDay;

        // Inserting the time in DOM
        document.getElementById('clock').innerHTML=currentTimeStr;

}