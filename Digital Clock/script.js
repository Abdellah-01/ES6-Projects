const hrs = document.querySelector('#hr-box')
const min = document.querySelector('#min-box')
const sec = document.querySelector('#sec-box')
const Am = document.querySelector('#am-pm-box')
const span = document.querySelector('#ampm')

setInterval(runClock, 1000)

function runClock() {
    let time = new Date();
    let hours = time.getHours();
    let miniutes = time.getMinutes();
    let seconds = time.getSeconds();
    let text = ''

    if(hours>12){
        hours = hours - 12;
        text = "PM"
    }

    else if(hours == 0){
        hours = 12;
        text = "AM"
    }
    else if(hours == 12){
        hours = 12;
        text = "PM"
    }
    else {
        text = "AM"
    }

    if(text == 'AM'){
        span.innerHTML = 'Ante-Meridiem'
    }
    else if(text == 'PM'){
        span.innerHTML = 'Post-Meridiem'
    }

    hours = hours < 10 ? '0'+hours : hours
    miniutes = miniutes < 10 ? '0'+miniutes : miniutes
    seconds = seconds < 10 ? '0'+seconds : seconds

    hrs.innerHTML = hours
    min.innerHTML = miniutes
    sec.innerHTML = seconds
    Am.innerHTML = text
}
