//Make a string of all 26 letters of the alphabet (lowercase).
const alphabetString = "abcdefghijklmnopqrstuvwxyz";

//Make a variable that will randomly pick one of the 26 letters as a secret letter.
let secretLetter = alphabetString[Math.floor(Math.random()*26)];

/*  
    Setup a keyboard event on the whole body.
        If the key you pressed is the secret key, you should append "SECRET KEY PRESSED" to the body in a tag of your choice.
            After the secret key is pressed, randomly pick another secret key and assign it to your secret key variable.
*/
document.body.addEventListener('keypress', function(event){
    if (event.key === secretLetter) {
        const yippee = document.createElement("h3");
        yippee.textContent = "SECRET KEY PRESSED";
        document.body.appendChild(yippee);
        secretLetter = alphabetString[Math.floor(Math.random()*26)];
    }
});