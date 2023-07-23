let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');

let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        //Display
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        //clear screen
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        //Evaluate
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        //Screen value
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}