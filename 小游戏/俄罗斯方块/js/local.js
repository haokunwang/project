

var Local = function(){
//��Ϸ����
    // var game;
//�����ʱ��
    var timer = null;
//����ʱ���ʱ��
    var timer1 = null;
//ʱ����
    var INTERVAL = 500;
//ʱ��
    var time = 0;
//�󶨼����¼�

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
//�ƶ�
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

//������ɸ�����
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

//��ʱ����
    var timeFunc = function(){
        time++;
        game.setTime(time);
/*
    //���Ӹ���  �����������
        if(time%10 == 0){
            game.addTailLines(generataBottomLine(1))
        }
*/

    }
//�������һ�����������
    var generateType = function(){
        return Math.ceil(Math.random() * 7) - 1;
    }
//�������һ����ת����
    var generateDir = function(){
        return Math.ceil(Math.random() * 4) - 1;
    }
//��ʼ
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
//����
    var stop = function(){
        if(timer){
            clearInterval(timer);
            timer = null;

            clearInterval(timer1);
            timer1 = null;
        }
        document.onkeydown = null;
    }
//����API
    this.start = start;
}