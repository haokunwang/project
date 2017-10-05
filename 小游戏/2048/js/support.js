
function getCellTop(i){
    return 20 + i * 120
}
function getCellLeft(j){
    return 20 + j * 120
}

function getNumberBackgroundColor( number ){
    switch( number ){
        case 2:return "#eee4da";break;
        case 4:return "#ede0c8";break;
        case 8:return "#f2b179";break;
        case 16:return "#f59563";break;
        case 32:return "#f67c5f";break;
        case 64:return "#f65e3b";break;
        case 128:return "#edcf72";break;
        case 256:return "#edcc61";break;
        case 512:return "#9c0";break;
        case 1024:return "#33b5e5";break;
        case 2048:return "#09c";break;
        case 4096:return "#a6c";break;
        case 8192:return "#93c";break;
    }

    return "black";
}

function getNumberColor( number ){
    if( number <= 4 )
        return "#776e65";

    return "white";
}

function nospace(data){
    for(var i = 0;i < data.length;i++){
        for(var j = 0;j < data[i].length;j++){
            if(data[i][j] == 0){
                return false
            }
        }
    }
    return true
}

//检测水平方向是否有障碍物
function noBlock(data,row,col1,col2){
    for(var i = col1;i < col2;i++){
        if(data[row][i] != 0){
            return false
        }
    }
    return true
}
//检测垂直方向是否有障碍物
function noBlockVertical(data,col,row1,row2){
    for(var i = row1;i < row2;i++){
        if(data[i][col] != 0){
            return false
        }
    }
    return true
}

//检测能否向左移动
function canMoveLeft(data){
    for(var i = 0;i < data.length;i++){
        for(var j = 1;j < data[i].length;j++){
            if(data[i][j] != 0){
                if(data[i][j-1] == 0 || data[i][j-1] == data[i][j]){
                    return true
                }
            }
        }
    }
    return false
}

//检测能否向右移动
function canMoveRight(data){
    for(var i = 0;i < data.length;i++){
        for(var j = data[i].length-2;j >= 0;j--){
            if(data[i][j] != 0){
                if(data[i][j+1] == 0 || data[i][j+1] == data[i][j]){
                    return true
                }
            }
        }
    }
    return false
}

//检测能否向上移动
function canMoveTop(data){
    for(var i = 0;i < data.length;i++){
        for(var j = 1;j < data[i].length;j++){
            if(data[j][i] != 0){
                if(data[j-1][i] == 0 || data[j-1][i] == data[j][i]){
                    return true
                }
            }
        }
    }
    return false
}

//检测能否向下移动
function canMoveDown(data){
    for(var i = 0;i < data.length;i++){
        for(var j = data[i].length - 2;j >= 0;j--){
            if(data[j][i] != 0){
                if(data[j+1][i] == 0 || data[j+1][i] == data[j][i]){
                    return true
                }
            }
        }
    }
    return false
}

//判断方块能否移动
function nomove(data){
    if(canMoveDown(data) ||
        canMoveTop(data) ||
        canMoveRight(data) ||
        canMoveLeft(data)){

        return false
    }
    return true
}