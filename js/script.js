document.onreadystatechange = function() {
    document.querySelectorAll("td").forEach(function (cell) {
        cell.addEventListener("click", turn);
    })
    document.querySelector("button").addEventListener("click",reset);
};

let playerOneTurn = true;
const winningSpots = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];


function turn() {
    if(playerOneTurn && this.innerHTML === ""){
        this.innerHTML = "O";
        checkVictory();
        playerOneTurn = !playerOneTurn;
    }else if(!playerOneTurn && this.innerHTML=== ""){
        this.innerHTML = "X";
        checkVictory();
        playerOneTurn = !playerOneTurn;
    }
}

function checkVictory() {
    const boxes = document.querySelectorAll("td");
    for(var i=0;i<winningSpots.length;i++){
        if((boxes[winningSpots[i][0]].innerHTML === boxes[winningSpots[i][1]].innerHTML && boxes[winningSpots[i][1]].innerHTML === boxes[winningSpots[i][2]].innerHTML) && boxes[winningSpots[i][0]].innerHTML!=""){
            boxes.forEach(function(box){
                box.removeEventListener("click",turn);
            })
            boxes[winningSpots[i][0]].classList.add("victory");
            boxes[winningSpots[i][1]].classList.add("victory");
            boxes[winningSpots[i][2]].classList.add("victory");
        }
    }
}

function reset(){
    const boxes = document.querySelectorAll("td");
    playerOneTurn = true;
    boxes.forEach(function(box){
        box.innerHTML = "";
        box.classList.remove("victory");
    })
    document.querySelectorAll("td").forEach(function (cell) {
        cell.addEventListener("click", turn);
    })
}