

var Local = function(){
//游戏对象
    // var game;
//定义计时器
    var timer = null;
//定义时间计时器
    var timer1 = null;
//时间间隔
    var INTERVAL = 500;
//时间
    var time = 0;
//绑定键盘事件

    var bindKeyEvent = function(){
      document.onkeydown = function(e){
          switch (e.keyCode){
              case 38:  //up
                  game.rotate();
                  break;
              case 39:  //right
                  game.right();
                  break;
              case 40:  //down
                  game.down();
                  break;
              case 37:  //left
                  game.left();
                  break;
              case 32:  //space
                  game.fall();
                  break;
          }
      }
    }
//移动
    var move = function(){
        //timeFunc();
        if(!game.down()){
            game.fixed();
            var line = game.checkClear();
            if(line){
                game.addScore(line)
            }
            var gameOver = game.checkGameOver();
            if(gameOver){
                game.gameover(false);
                stop();
            }else{
                game.performNext(generateType(),generateDir())
            }
        }
    }

//随机生成干扰行
    var generataBottomLine = function(lineNum){
        var lines = [];
        for(var i = 0;i < lineNum;i++){
            var line = [];
            for(var j = 0;j < 10; j++){
                line.push(Math.ceil(Math.random() * 2) - 1)
            }
            lines.push(line)
        }
        return lines
    }

//计时函数
    var timeFunc = function(){
        time++;
        game.setTime(time);
/*
    //增加干扰  随机生成行数
        if(time%10 == 0){
            game.addTailLines(generataBottomLine(1))
        }
*/

    }
//随机生成一个方块的种类
    var generateType = function(){
        return Math.ceil(Math.random() * 7) - 1;
    }
//随机生成一个旋转次数
    var generateDir = function(){
        return Math.ceil(Math.random() * 4) - 1;
    }
//开始
    var start = function(){
        var doms = {
            gameDiv:document.getElementById("game"),
            nextDiv:document.getElementById("next"),
            timeDiv:document.getElementById("time"),
            scoreDiv:document.getElementById("score"),
            resultDiv:document.getElementById("gameover")
        }
        game = new Game();
        game.init(doms,generateType(),generateDir());
        bindKeyEvent();
        game.performNext(generateType(),generateDir());
        timer = setInterval(move,INTERVAL);
        timer1 = setInterval(timeFunc,1000)
    }
//结束
    var stop = function(){
        if(timer){
            clearInterval(timer);
            timer = null;

            clearInterval(timer1);
            timer1 = null;
        }
        document.onkeydown = null;
    }
//导出API
    this.start = start;
}