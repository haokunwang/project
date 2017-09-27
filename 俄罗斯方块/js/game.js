
var Game = function(){
//domԪ��
    var gameDiv;
    var nextDiv;
    var timeDiv;
    var scoreDiv;
    var resultDiv;
//����
    var socre = 0;
//��Ϸ����
    var gameData = [
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0]
        ];

//��ǰ����
    var cur;

//��һ������
    var next;

//divs
    var nextDivs = [];
    var gameDivs = [];

//��ʼ��Div
    var initDiv = function(container,data,divs){
        for(var i = 0;i < data.length;i++){
            var div = [];
            for(var j = 0;j < data[0].length;j++){
                var newNode = document.createElement('div');
                newNode.className = "none";
                newNode.style.top = (i * 20) + "px";
                newNode.style.left = (j * 20) + "px";
                container.appendChild(newNode);
                div.push(newNode)
            }
            divs.push(div)
        }
    }
//ˢ��ҳ��Div
    var refreshDiv = function(data,divs){
        for(var i = 0;i < data.length;i++){
            for(var j = 0;j < data[0].length;j++){
                if(data[i][j] == 0){
                    divs[i][j].className = "none";
                }else if(data[i][j] == 1){
                    divs[i][j].className = "done";
                }else if(data[i][j] == 2){
                    divs[i][j].className = "current";
                }
            }
        }
    }
//��������Ƿ�Ϸ�
    var isValid = function(pos,data){
        for(var i = 0;i < data.length;i++){
            for(var j = 0;j < data[0].length;j++){
                if(data[i][j] != 0){
                    if(!check(pos,i,j)){
                        return false
                    }
                }
            }
        }
        return true;
    }

//��ⷽ���ƶ��Ƿ񳬳���Χ
    var check = function(pos,x,y){
        //console.log(pos.x + x)
        //console.log(pos.y + y)
        if(pos.x + x < 0){
            return false
        }else if(pos.x + x >= gameData.length){
            return false
        }else if(pos.y + y < 0){
            return false
        }else if(pos.y + y >= gameData[0].length){
            return false
        }else if(gameData[pos.x + x][pos.y + y] == 1){
            return false
        }else{
            return true
        }
    }
//�������
    var clearDate = function(){
        for(var i = 0;i < cur.data.length;i++){
            for(var j = 0;j < cur.data[0].length;j++){
                if(check(cur.origin,i,j)){
                    gameData[cur.origin.x + i][cur.origin.y + j] = 0
                }
            }
        }
    }
//��������
    var setData = function(){
        for(var i = 0;i < cur.data.length;i++){
            for(var j = 0;j < cur.data[0].length;j++){
                if(check(cur.origin,i,j)){
                    gameData[cur.origin.x + i][cur.origin.y + j] = cur.data[i][j]
                }
            }
        }
    }
//��ת
    var rotate = function(){
        if(cur.canRotate(isValid)){
            clearDate();
            cur.rotate();
            setData();
            refreshDiv(gameData,gameDivs);
        }
    };
//����
    var left = function(){
        if(cur.canLeft(isValid)){
            clearDate();
            cur.left();
            setData();
            refreshDiv(gameData,gameDivs);
        }
    };
//����
    var right = function(){
        if(cur.canRight(isValid)){
            clearDate();
            cur.right();
            setData();
            refreshDiv(gameData,gameDivs);
        }
    };
//����
    var down = function(){
        if(cur.canDown(isValid)){
            clearDate();
            cur.down();
            setData();
            refreshDiv(gameData,gameDivs);
            return true
        }else{
            return false
        }
    };
//�����ƶ����ײ�ʱ������̶�
    var fixed = function(){
        for(var i = 0;i < cur.data.length;i++) {
            for (var j = 0; j < cur.data[0].length; j++) {
                if(check(cur.origin,i,j)){
                    if(gameData[cur.origin.x + i][cur.origin.y + j] == 2){
                        gameData[cur.origin.x + i][cur.origin.y + j] = 1
                    }
                }
            }
        }
        refreshDiv(gameData,gameDivs)
    }
//����
    var checkClear = function(){
     //���˶�����
        var line = 0;

        for(var i = gameData.length-1;i >= 0;i--) {
            var clear = true;
            for (var j = 0; j < gameData[0].length; j++) {
                if(gameData[i][j] != 1){
                    clear = false;
                    break;
                }
            }
            if(clear){
                line++;
                for(var m = i;m > 0;m--){
                    for(var n = 0;n < gameData[0].length;n++){
                        gameData[m][n] = gameData[m-1][n]
                    }
                }
                for(var k = 0;k < gameData[0].length;k++){
                    gameData[0][k] = 0
                }
                i++
            }
        }
        return line
    }
//�����Ϸ����
    var checkGameOver = function(){
        var gameOver = false;
        for(var i = 0;i < gameData[0].length-1;i++){
            if(gameData[1][i] == 1){
                gameOver = true;
            }
        }
        return gameOver
    }
//������һ������
    var performNext = function(type,dir){
        cur = next;
        setData();
        next = SquareFactory.prototype.make(type,dir)
        refreshDiv(gameData,gameDivs)
        refreshDiv(next.data,nextDivs)
    }
//����ʱ��
    var setTime = function(time){
        timeDiv.innerText = time;
    }
//�Ʒ�
    var addScore = function(line){
        var s = 0;
        switch (line){
            case 1:
                s = 10;
                break;
            case 2:
                s = 30;
                break;
            case 3:
                s = 60;
                break;
            case 4:
                s = 100;
                break;
            default :
                s = 200;
                break;
        }
        socre = s + socre;
        scoreDiv.innerText = socre;
        console.log(scoreDiv)
    }
//��Ϸ����
    var gameover = function(win){
        if(win){
            resultDiv.innerText = "��Ӯ��"
        }else{
            resultDiv.innerText = "������"
        }
    }


//���Ź���
    //�ײ�������
    var addTailLines = function(lines){
        for(var i = 0;i < gameData.length - lines.length;i++){
            gameData[i] = gameData[i + lines.length];
        }
        for(var j = 0;j < lines.length;j++){
            gameData[gameData.length - lines.length + j] = lines[j];
        }
        cur.origin.x = cur.origin.x - lines.length;
        if(cur.origin.x < 0){
            cur.origin.x = 0;
        }
        refreshDiv(gameData,gameDivs);
    }



//��ʼ������
    var init = function(doms,type,dir){
        gameDiv = doms.gameDiv;
        nextDiv = doms.nextDiv;
        timeDiv = doms.timeDiv;
        scoreDiv = doms.scoreDiv;
        resultDiv = doms.resultDiv;
        next = SquareFactory.prototype.make(type,dir);
        initDiv(gameDiv,gameData,gameDivs);
        initDiv(nextDiv,next.data,nextDivs);

        refreshDiv(next.data,nextDivs);
    };

//����API ��©�ӿ�
    this.init = init;
    this.rotate = rotate;
    this.left = left;
    this.right = right;
    this.down = down;
    this.fixed = fixed;
    this.checkClear = checkClear;
    this.checkGameOver = checkGameOver;
    this.performNext = performNext;
    this.setTime = setTime;
    this.addScore = addScore;
    this.gameover = gameover;
    this.fall = function(){while(down());};


    this.addTailLines = addTailLines;
}



