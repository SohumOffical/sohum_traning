// Get the HTML Elements
var textAreaElement = document.querySelector('#text-area');
var textAreaBorder = document.querySelector('#text-area');
var originalTextElement = document.querySelector('.text-section-div p');
var minutesElement = document.querySelector('#minutes');
var secondsElement = document.querySelector('#seconds');
var resetButton = document.querySelector('#reset');
var greetingMessage = document.querySelector('.cong-section');
var textArray = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur autem culpa,',
                 'deleniti fugit labore laudantium nobis odit porro praesentium quasi quia sapiente ',
                 'sed suscipit tempore ut? Dignissimos eos molestiae nihil pariatur temporibus. Animi',
                 'cumque doloremque eligendi, facere obcaecati optio perferendis voluptatum. ',
                 'Accusamus accusantium ad, assumenda, eius et fugiat inventore ipsam maxime minima ',
                 'minus nesciunt optio provident quisquam quod saepe sed suscipit totam. Accusantium',
                 'consectetur dolorem ducimus earum iste laborum molestias porro tempora. A amet,',
                 'animi, consectetur cumque dolore exercitationem explicabo ipsa iure maiores odit',
                 'perspiciatis provident quisquam quod ratione repellendus saepe tempora vel veniam ',
                 'quisquam quod ratione repellendus saepe tempora vel veniam voluptas voluptatum! Labore obcaecati sequi veniam.',
'tempore ut? Dignissimos eos molestiae nihil pariatur temporibus. Animi cumque doloremque eligendi'];
var randomNumber = 0;
var timer = 0;
var minutes = 0;
var seconds = 0;
var interval = 0;
var timerRunning = false;


// Add Event Listeners for HTML Elements
textAreaElement.addEventListener('keypress',startTimer);
textAreaElement.addEventListener('keyup',matchText);
resetButton.addEventListener('click',resetAll);

function getRandom() {
    var randomNumber  =  Math.round(Math.random() * 10) ;
    return randomNumber;
}

function getRandomText() {
    randomNumber  = getRandom();
    console.log(randomNumber);
    var randomStr = textArray[randomNumber];
    console.log(randomStr);
    originalTextElement.textContent = randomStr;
}

function resetAll() {
    clearInterval(interval);
    timer = 0;
    minutes = 0;
    seconds = 0;
    interval = 0;
    timerRunning = false;
    textAreaBorder.style.borderColor = 'gray';
    textAreaElement.value = '';
    minutesElement.textContent  = "00";
    secondsElement.textContent = "00";
    greetingMessage.style.display = 'none';
    getRandomText();
}

function matchText() {
    var textEntered = textAreaElement.value;
    var originalText = originalTextElement.textContent.trim();
    var partialText = originalText.substring(0,textEntered.length);
    if(textEntered === ''){
        textAreaBorder.style.borderColor = 'gray';
    }
    else{
        if(textEntered === originalText){
            // green
            textAreaBorder.style.borderColor = 'seagreen';
            // Stop the timer
            clearInterval(interval);
            // Display congratulations Message
            greetingMessage.style.display = 'block';
        }
        else{
            if(textEntered === partialText){
                // blue
                textAreaBorder.style.borderColor = 'lightblue';
            }
            else{
                // red
                textAreaBorder.style.borderColor = 'orangered';
            }
        }
    }
}

function startTimer() {
    var textEnteredLength = textAreaElement.value.length;
    if(textEnteredLength === 0 && !timerRunning){
        // start the Timer
       interval = setInterval(countTime,10);
       timerRunning = true;
    }
}

function countTime() {
    minutes = Math.floor((timer/100)/60);
    seconds = Math.floor((timer/100) - (minutes * 60));
    minutesElement.textContent = prefixZero(minutes);
    secondsElement.textContent = prefixZero(seconds);
    timer++;
}

function prefixZero(time) {
    if(time <= 9){
        return "0" + time;
    }
    else{
        return time;
    }
}

