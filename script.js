
let audioturn = new Audio("ting.mp3");
let gameOver = new Audio("gameover.wav");
let turns = "X";
let isgameover = false;


const changeTurn =()=>{
    return turns === "X"?"0":"X";
}
const win = ()=>{
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(e =>{
          if( (boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText)
             && (boxtext[e[0]].innerText !== "") )
            {
                document.querySelector(".info").innerText = boxtext[e[0]].innerText + " won";
                isgameover = true;
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "250px";
            }
    })
}
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click', (e)=>{
        if(boxtext.innerText === ""){
            boxtext.innerText = turns;
            turns = changeTurn();
            audioturn.play();
            win();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turns; 
            }
        }
    })
})

function RESET(){
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
           element.innerText = "";
    });
    turns = "X";
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turns; 
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
})
}

