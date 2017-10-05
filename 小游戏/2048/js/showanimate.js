
function showNumberAnimate(divs,i,j,num){
    $(divs[i][j]).css({
        color: getNumberColor(num),
        "background-color": getNumberBackgroundColor(num)
    }).text(num);
    $(divs[i][j]).animate({
        width: "100px",
        height: "100px",
        top: i * 120 + 20,
        left: j * 120 + 20
    },100)
}

function showMoveAnimate(divs,fromx,fromy,tox,toy){
    $(divs[fromx][fromy]).animate({
        top: tox * 120 + 20,
        left: toy * 120 + 20
    },200);
}

function updataScore(score){
    $("#score").text(score)
}