
var game = (function(){
    var row = 10;
    var colum = 10;
    var leiNum = 20; 
    var doms = {
        "box":"box",
        "time":"time1",
        "score":"score1",
    };


    var box = document.getElementsByClassName(doms.box)[0];
    var addtime = document.getElementsByClassName(doms.time)[0];
    var addscore = document.getElementsByClassName(doms.score)[0];



    var timer = null;
    var time = 0;
    var score = 0;
    var gameData = [];

    for(var i = 0;i < row;i++){
        gameData[i] = []
        for(var j = 0;j < colum;j++){
            gameData[i][j] = 0;
        }
    }


    var random = function(Num,row,colum){
        var n = 0;
        while(n < Num){
            var i = Math.floor(Math.random() * row);
            var j = Math.floor(Math.random() * colum);
            if(gameData[i][j] == 0){
                gameData[i][j] = 1;
                n++
            }
        }
    }


    var createDiv = function(){

        for(var i = 0;i < gameData.length;i++){
            for(var j = 0;j < gameData.length;j++){
                var div = document.createElement("div");
                div.setAttribute("x",i);
                div.setAttribute("y",j);
                
                if(gameData[i][j] == 1){
                    div.style.background = "#ff0"
                }
                
                box.appendChild(div)
            }
        }
    }


    random(leiNum,row,colum)
    createDiv()

    var  addTime = function(){
        time++;
        addtime.innerText = time;
    }

    var check = function(data){
        score = 0;
        for(var i = 0;i < data.length;i++){
            var x = +data[i].getAttribute("x");
            var y = +data[i].getAttribute("y");
            if(gameData[x][y] == 1){
                score = score + 1;
                addscore.innerText = score;
            }
        }
    }


document.oncontextmenu = function(){return false};

box.onmouseup = function(e){
    if(!timer){
        timer = setInterval(addTime,1000)
    }
    if(e.button===2){           //右击事件
        e.target.className = "select"
        var eles = document.getElementsByClassName("select")

        check(eles)
        
        if(score >= leiNum){
            clearInterval(timer)
            timer = null;
            alert("赢了")
        }
        
    }else{                      //左击事件
        var x = +e.target.getAttribute("x");
        var y = +e.target.getAttribute("y");
        var num = 0;

        if(gameData[x][y] == 1){
            clearInterval(timer)
            timer = null;

            for(var i = 0;i < box.children.length;i++){
                var m = +box.children[i].getAttribute("x");
                var n = +box.children[i].getAttribute("y");
                if(gameData[m][n] == 1){
                    box.children[i].style.background = "#000"
                }
            }

            alert("game over")
        }else{
            for(var i = x-1;i <= x+1;i++){
                for(var j = y-1;j <= y+1;j++){
                    if(i >= 0 && j >= 0 && i < 10 && j < 10){
                        num += gameData[i][j];
                    }
                }
            }
            if(e.target.className != "box"){
                e.target.innerText = num
                if(num == 0){
                    e.target.style.color = "#000000"
                }else if(num == 1){
                    e.target.style.color = "blue"
                }else if(num == 2){
                    e.target.style.color = "green"
                }else{
                    e.target.style.color = "red"
                }

            }
        }
    }
    
}



})()






