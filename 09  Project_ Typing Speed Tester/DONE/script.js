const originP = document.querySelector("#origin-text p");
const originText = document.querySelector("#origin-text p").innerHTML;
const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const theTimer = document.querySelector(".timer");
const resetButton = document.querySelector("#reset");

//timer[3] helps make mathematical calculation whereas timer[0], 
//timer[1], timer[2] helps display time on screen
var timer = [0,0,0,0];
var interval;
var timerRunning = false;

// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}

// Run a standard minute/second/hundredths timer:
function runTimer() {
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}

// Match the text entered with the provided text on the page:
function spellCheck() {
    let textEntered = testArea.value;
    let originTextMatch = originText.substring(0,textEntered.length);

    if (textEntered == originText) { //matches entirely
        clearInterval(interval);
        testArea.readOnly = true; // testArea.disabled = true;
        testWrapper.style.borderColor = "#429890";
        originP.innerHTML = "CONGS! YOU COMPLETED THE TASK IN " + timer[0] + " minutes " + timer[1] + " seconds " + timer[2] + " centiseconds!";
        originP.classList.add("finished");
    } else {
        if (textEntered == originTextMatch) { //matches partially
            testWrapper.style.borderColor = "#65CCf3";
        } else { //doesnt match
            testWrapper.style.borderColor = "darkred";
        }
    }

}

// Start the timer:
function start() {
    let textEnterdLength = testArea.value.length;
    if (textEnterdLength === 0 && !timerRunning) {
        timerRunning = true;
        interval = setInterval(runTimer, 10);//calls every 1 cs
    }
    console.log(textEnterdLength);
}

// Reset everything:
function reset() {
    clearInterval(interval); // timer stops
    interval = null; // 4 memory efficiency
    timer = [0,0,0,0];
    timerRunning = false;

    originP.innerHTML = originText;
    originP.classList.remove("finished");
    testWrapper.style.borderColor = "grey";
    testArea.readOnly = false; //alt: testArea.disabled = false;
    testArea.value = "";
    theTimer.innerHTML = "00:00:00";
}

// Event listeners for keyboard input and the reset
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);
