

var chessBoard = [];
var me = true;
var over = false;

for(var i = 0;i < 15;i++){
    chessBoard[i] = [];
    for(var j = 0;j < 15;j++){
        chessBoard[i][j] = 0;
    }
}
//赢法数组
var wins = [];

for(var i = 0;i < 15;i++){
    wins[i] = [];
    for(var j = 0;j < 15;j++){
        wins[i][j] = [];
    }
}

//赢法的种类
var count = 0;
//横向
for(var i = 0;i < 15;i++){
    for(var j = 0;j < 11;j++){
        for(var k = 0;k < 5;k++){
            wins[i][j+k][count] = true;
        }
        count++
    }
}

//列向
for(var i = 0;i < 15;i++){
    for(var j = 0;j < 11;j++){
        for(var k = 0;k < 5;k++){
            wins[j+k][i][count] = true;
        }
        count++
    }
}

//斜向
for(var i = 0;i < 11;i++){
    for(var j = 0;j < 11;j++){
        for(var k = 0;k < 5;k++){
            wins[i+k][j+k][count] = true;
        }
        count++
    }
}

//反斜向
for(var i = 0;i < 11;i++){
    for(var j = 14;j > 3;j--){
        for(var k = 0;k < 5;k++){
            wins[i+k][j-k][count] = true;
        }
        count++
    }
}


//赢法的统计数组
var myWin = [];
var computerWin = [];
for(var i = 0;i < count;i++){
    myWin[i] = 0;
    computerWin[i] = 0;
}



var chess = document.getElementById("chess");
var context = chess.getContext("2d");


context.strokeStyle = "#bfbfbf";

var logo = new Image();
logo.src = "images/bg.jpg";
logo.onload = function(){

//添加水印背景
    //context.drawImage(logo,0,0,450,450);

    drawChessBoard()


}


//绘制棋盘
var drawChessBoard = function(){
    for(var i = 0;i < 15; i++){
        context.moveTo(15 + i * 30,15);
        context.lineTo(15 + i * 30,435);
        context.stroke();

        context.moveTo(15,15 + i * 30);
        context.lineTo(435,15 + i * 30);
        context.stroke();
    }
}

//绘制棋子
var oneStep = function(i,j,me){
    context.beginPath()

    context.arc(15 + i * 30,15 + j * 30,13,0,2*Math.PI)

    context.closePath();
    var gradient = context.createRadialGradient(15 + i * 30 + 2,15 + j * 30 - 2,13,15 + i * 30 + 2,15 + j * 30 - 2,0);
    if(me){
        gradient.addColorStop(0,"#0a0a0a");
        gradient.addColorStop(1,"#636766");
    }else{
        gradient.addColorStop(0,"#d1d1d1");
        gradient.addColorStop(1,"#f9f9f9");
    }
    context.fillStyle = gradient;
    context.fill();
}

chess.onclick = function(e){
    if(over){return}
    var x = e.offsetX;
    var y = e.offsetY;
    var i = Math.floor(x/30);
    var j = Math.floor(y/30);
    if(chessBoard[i][j] == 0){
        oneStep(i,j,me);
        if(me){
            chessBoard[i][j] = 1;
        }else{
            chessBoard[i][j] = 2;
        }
        me = !me

        for(var k = 0;k < count;k++){
            if(wins[i][j][k]){
                myWin[k]++;
                computerWin[k] = -1;
                if(myWin[k] == 5){
                    alert("赢了")
                    over = true
                }
            }
        }
    }
}







