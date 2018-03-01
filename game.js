
function startGame(){

    document.turn = "X";
    document.winner = null;
    setMessage(document.turn + " начинает игру");
}

function nextMove(square){
    if (document.winner != null){
        setMessage(document.turn + " уже победил");
    } else if (square.innerHTML == ""){
        square.innerHTML = document.turn;
        switchTurn();
    } else {
        setMessage("Ячейка занята");
    }
}

function switchTurn(){
    if (checkWinner(document.turn)){
        setMessage("Поздравляем, " + document.turn + " победил!");
        document.winner = document.turn;
    } else if (document.turn == "X"){
        document.turn = "O";
        setMessage(document.turn + ", ваш ход");
    } else {
        document.turn = "X";
        setMessage(document.turn + ", ваш ход");
    }
}

function checkWinner(move){
    var result = false;
    if (checkRow(1,2,3,move) || checkRow(4,5,6,move) || checkRow(7,8,9,move) || checkRow(1,4,7,move) ||
        checkRow(2,5,8,move) || checkRow(3,6,9,move) || checkRow(1,5,9,move) || checkRow(3,5,7,move)){
        result = true;
    }
    return result;
}

function checkRow(a,b,c,move){
    var result = false;
    if (getBox(a) == move && getBox(b) == move && getBox(c) == move){
        result = true;
    }
    return result;
}

function setMessage(msg){
    $("#message").html(msg);
}

function getBox(number){
    return $("#g" + number).html();
}

$("#but").click(function(){
    $("#g1").empty(); $("#g2").empty(); $("#g3").empty(); $("#g4").empty();
    $("#g5").empty(); $("#g6").empty(); $("#g7").empty(); $("#g8").empty();
    $("#g9").empty();
});



