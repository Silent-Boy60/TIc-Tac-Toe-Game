console.log("Welcome to Tic Tac Toe");
let gameover = new Audio("gameover.mp3")
let music = new Audio("music.mp3")
let click = new Audio("click.mp3")
let reset = document.querySelector(".reset");
let draw = document.querySelector(".draw");
isgameover = false;
// isss tarha likh kr hm js ke ander apni audio ko input kra skte hn 
let turn = "X";
// Function to change the turn 
const changeturn = () => {
    // turn === "X": This part of the code checks if the variable turn is strictly equal to the string "X". It compares the value of turn with the string "X" using the strict equality operator (===). If turn is indeed equal to "X", this expression evaluates to true; otherwise it evaluates to false.
    return turn === "X" ? "0" : "X";
    // ? "0" : "X": This is the ternary conditional operator in JavaScript. It's a shorthand way of writing an if-else statement. The syntax is condition ? value_if_true : value_if_false. If the condition (turn === "X") is true, the expression evaluates to the value before the : (in this case, "0"); otherwise, it evaluates to the value after the : (in this case, "X").
    // iss ka matlab ye hai ke agar X hai to 0 return kr do or agar 0 hai to X return krdo 
}

// Function to check a win 
const checkwin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2, 0, 5, 0],
        [3, 4, 5, 0, 15, 0],
        [6, 7, 8, 0, 25, 0],
        [0, 3, 6, -10, 15, 90],
        [1, 4, 7, 0.1, 15, 90],
        [2, 5, 8, 10, 15, 90],
        [0, 4, 8, 0, 15, 45],
        [2, 4, 6, 0, 15, 135],
    ]
    // e[0] ka matlab ye hai ke wins ke element ke index 0 wali value or e[1] ka matlab ye hai ke wins ke element ke index 1 wali value or e[2] ka matlab ye hai ke wins ke element ke index 2 wali value
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "")) {
            // document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Won";
            document.querySelector(".line").style.width = `30vw`;
            // abb hmain har eik arr ke liye uss ke hisab se transform property add krni pare gi. translate(x , y) or rotate se hm iss ko apni win ke hisabe se rotatye krwai ge hreik arr mai
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            // kuke yahan pr info eik hi class hia iss liye hm ne sath mai [0] likha hia take uss ke index 0 ko target krskein
            turn = changeturn();
            document.getElementsByClassName("info")[0].innerText =  turn + " Won ";
            isgameover = true;
            setTimeout(() => {
                document.body.style.background = "#bf5252";
                document.querySelector(".victory").style.display = "flex";
                gameover.play();
                document.querySelector(".gamecontainer").style.display = "none";
                document.getElementById("navbar").style.display = "none";
            }, 1500);
        }
    })
}

// Game Logic 
// music.play();
let boxes = document.getElementsByClassName('box')
// boxes hamre html collection hn iss liye hm ne unn ko ek array bna lia hai Array.from ko use krke take hm unn pr forEach loop laga skein 
// Array.from(boxes): This line takes the boxes object, which is likely an array-like or iterable object (such as a NodeList or HTMLCollection obtained from the DOM), and converts it into a new array. The Array.from() method creates a new array instance from an array-like or iterable object.
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext')
    // iss ka matlab ye hai ke uss har element ka ander jo querySelector boxtext hai uss ko tum le lo 
    element.addEventListener('click', () => {
        if (boxtext.innerText === "") {
            click.play();
            boxtext.innerText = turn;
            // click.play() meri Audio ko play kre ga 
            turn = changeturn();
            checkwin();
            // ye checkwin function ko run krne ke baad info class ke text ko overwrite krrha tha is liye hm ne condition dedi hai 
            if (!isgameover) {
                // !isgameover iss ka matlab ye hi hai isgameover == false 
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
            // else if(isgameover == true){
            // }
        }
    })

});

reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext')
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X"
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    // document.querySelector(".image").getElementsByTagName('img')[0].style.width = "0px";
    gameover.pause();
    gameover.currentTime = 0;
    // The Audio currentTime property is used for setting or returning the current position of the audio playback. iss ke andeer hm seconds ki form mai time ka playback btate hn.
    // document.getElementById("gamepage").style.display = "flex";
    document.querySelector(".victory").style.display = "none";
    document.querySelector(".gamecontainer").style.display = "flex";
    document.body.style.background = "none";
    document.getElementById("navbar").style.display = "flex";
    document.querySelector(".line").style.width = `0vw`;
})
draw.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext')
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X"
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    // document.querySelector(".image").getElementsByTagName('img')[0].style.width = "0px";  
})