
var row = 4;
var column = 4;

//Ԫ�ؽڵ�
var $contain = $("#contain");

//��Ϸ����
var gameData = [];

//��¼һ�������Ƿ������
var hasConflocted = [];

//�÷�
var score = 0;

//����Div
var bgDivs = [];

//�ƶ�Div
var gameDivs = [];


$(document).ready(function(){
    Game();

    $("#newgamebtn").click(function(){
        Game();
    })
});



function Game(){



    //��ʼ������
    init();

    //��ʼ������
    score = 0;
    $("#score").text(score)
}
function init(){
    clearDate();

    initDiv($contain,gameData,bgDivs,column,row);

    refreshDiv($contain,gameData,gameDivs);

//��������������ָ���
    generateNumber(gameData,gameDivs);
    //generateNumber(gameData,column,row);
}
//�������
function clearDate(){
    $(".cell").remove();
    gameData = [];
    gameDivs = [];
    score = 0;
    bgDivs = [];
}
//��ʼ�� ���� �� ����Div
function initDiv(contain,data,divs,column,row){
    for(var i = 0;i < column;i++){
        data[i] = [];

        hasConflocted[i] = [];

        var div = [];
        for(var j = 0;j < row;j++){
            var $div = $("<div class='cell'></div>");
            $div.css({
                left: 20 + j * 120,
                top: 20 + i * 120
            });
            data[i][j] = 0;

            hasConflocted[i][j] = false;

            div.push($div);
            contain.append($div);
        }
        divs.push(div);
    }
}

//ˢ��Div
function refreshDiv(contain,data,divs){

    $(".cell-number").remove();

    for(var i = 0;i < data.length;i++){
        var div = [];
        for(var j = 0;j < data[i].length;j++){
            var $div = $("<div class='cell-number'></div>");
            if(data[i][j] == 0){
                $div.css({
                    width: "0px",
                    height: "0px",
                    top: i * 120 + 70,
                    left: j * 120 + 70
                })
            }else{
                $div.css({
                    width: "100px",
                    height: "100px",
                    top: i * 120 + 20,
                    left: j * 120 + 20,
                    color: getNumberColor(data[i][j]),
                    "background-color": getNumberBackgroundColor(data[i][j])
                }).text(data[i][j])
            }
            div.push($div);
            contain.append($div);

            hasConflocted[i][j] = false;

        }
        divs.push(div)
    }
}


//�������һ������
function generateNumber(data,divs){

//�ж��Ƿ��п�λ��
    if(nospace(data)){
        return false
    }

//�漴һ��λ��
    var ranx = parseInt((Math.random()*data[0].length));
    var rany = parseInt((Math.random()*data.length));
    while(data[ranx][rany] != 0){
        ranx = parseInt((Math.random()*data[0].length));
        rany = parseInt((Math.random()*data.length));
    }

//�������һ������ 2 ���� 4
    var ranNumber = Math.random()>=0.5?2:4;

//�������λ������ʾ�����
    data[ranx][rany] = ranNumber;

//�Զ����ķ�ʽ��ʾ����
    showNumberAnimate(divs,ranx,rany,ranNumber);
    return true
}

//�󶨼����¼�
$(document).keydown(function(e){
    switch (e.keyCode){
        case 37:    //left
            if(canMoveLeft(gameData)){
                moveLeft(gameData,gameDivs);
                setTimeout(function(){
                    gameDivs = [];
                    refreshDiv($contain,gameData,gameDivs);
                    generateNumber(gameData,gameDivs);
                },210);

                setTimeout(function(){
                    isgomeover(gameData);
                },350);  
            }
            break;
        case 38:    //up
            if(canMoveTop(gameData)){
                moveTop(gameData,gameDivs);
                setTimeout(function(){
                    gameDivs = [];
                    refreshDiv($contain,gameData,gameDivs)
                    generateNumber(gameData,gameDivs);
                },210);
                
                setTimeout(function(){
                    isgomeover(gameData);
                },350);  
            }
            break;
        case 39:    //right
            if(canMoveRight(gameData)){
                moveRight(gameData,gameDivs);
                setTimeout(function(){
                    gameDivs = [];
                    refreshDiv($contain,gameData,gameDivs);
                    generateNumber(gameData,gameDivs);
                },210);
                
                setTimeout(function(){
                    isgomeover(gameData);
                },350);  
            }
            break;
        case 40:    //down
            if(canMoveDown(gameData)){
                moveDown(gameData,gameDivs);
                setTimeout(function(){
                    gameDivs = [];
                    refreshDiv($contain,gameData,gameDivs)
                    generateNumber(gameData,gameDivs);
                },210);
                
                setTimeout(function(){
                    isgomeover(gameData);
                },350);  
            }
            break;
    }
})

//�����ƶ�
function moveLeft(data,divs){
    for(var i = 0;i < data.length;i++){
        for(var j = 0;j < data[i].length;j++){
            if(data[i][j] !== 0){
                for(var k = 0;k < j;k++){
                    if(data[i][k] == 0 && noBlock(data,i,k+1,j)){
                        showMoveAnimate(divs,i,j,i,k);
                        data[i][k] = data[i][j];
                        data[i][j] = 0;
                        break;
                    }else if(data[i][k] == data[i][j] && noBlock(data,i,k+1,j) && !hasConflocted[i][k]){
                        showMoveAnimate(divs,i,j,i,k);
                        data[i][k] += data[i][j];
                        data[i][j] = 0;

                        //���·���
                        score += data[i][k];
                        updataScore(score);

                        hasConflocted[i][k] = true;

                        break;
                    }
                }
            }
        }
    }
}

//�����ƶ�
function moveRight(data,divs){
    for(var i = 0;i < data.length;i++){
        for(var j = data[i].length-2;j >= 0;j--){
            if(data[i][j] !== 0){
                for(var k = data[i].length-1;k > j;k--){
                    if(data[i][k] == 0 && noBlock(data,i,j+1,k)){
                        showMoveAnimate(divs,i,j,i,k);
                        data[i][k] = data[i][j];
                        data[i][j] = 0;
                        break;
                    }else if(data[i][k] == data[i][j] && noBlock(data,i,j+1,k) && !hasConflocted[i][k]){
                        showMoveAnimate(divs,i,j,i,k);
                        data[i][k] += data[i][j];
                        data[i][j] = 0;

                        //���·���
                        score += data[i][k];
                        updataScore(score);

                        hasConflocted[i][k] = true;

                        break;
                    }
                }
            }
        }
    }
}
//�����ƶ�
function moveTop(data,divs){
    for(var i = 0;i < data.length;i++){
        for(var j = 1;j < data[i].length;j++){
            if(data[j][i] !== 0){
                for(var k = 0;k < j;k++){
                    if(data[k][i] == 0 && noBlockVertical(data,i,k+1,j)){
                        showMoveAnimate(divs,j,i,k,i);
                        data[k][i] = data[j][i];
                        data[j][i] = 0;
                        break;
                    }else if(data[k][i] == data[j][i] && noBlockVertical(data,i,k+1,j) && !hasConflocted[k][i]){
                        showMoveAnimate(divs,j,i,k,i);
                        data[k][i] += data[j][i];
                        data[j][i] = 0;

                        //���·���
                        score += data[k][i];
                        updataScore(score);

                        hasConflocted[k][i] = true;

                        break;
                    }
                }
            }
        }
    }
}
//�����ƶ�
function moveDown(data,divs){
    for(var i = 0;i < data.length;i++){
        for(var j = data[i].length-2;j >= 0;j--){
            if(data[j][i] !== 0){
                for(var k = data[i].length-1;k > j;k--){
                    if(data[k][i] == 0 && noBlockVertical(data,i,j+1,k)){
                        showMoveAnimate(divs,j,i,k,i);
                        data[k][i] = data[j][i];
                        data[j][i] = 0;
                        break;
                    }else if(data[k][i] == data[j][i] && noBlockVertical(data,i,j+1,k) && !hasConflocted[k][i]){
                        showMoveAnimate(divs,j,i,k,i);
                        data[k][i] += data[j][i];
                        data[j][i] = 0;

                        //���·���
                        score += data[k][i];
                        updataScore(score);

                        hasConflocted[k][i] = true;

                        break;
                    }
                }
            }
        }
    }
}

function isgomeover(data){
    if(nospace(data) && nomove(data)){
        gomeover()
    }
}
function gomeover(){
    alert("gome over")
}