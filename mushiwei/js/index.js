window.$ = HTMLElement.prototype.$ =  function(selector){
    //return document.querySelectorAll(selector)
//返回值这块我们要做个判断  如果是window 就用document来访问　如果是任意元素　就返回this
    var elems =(this == window? document:this).querySelectorAll(selector)
    // 在进行元素个数的判断
    if(elems == null){
        return null
    }else if(elems.length ==1){
        return elems[0]
    }else{
        return elems;
    }
};



     function hasClass(obj, cls) {
         return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
     }

     function addClass(obj, cls) {
         if (!this.hasClass(obj, cls)) obj.className = "oou2 fl mL5 mT5 texC font20 " + cls;
     }

     function removeClass(obj, cls) {
         if (hasClass(obj, cls)) {
             var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
             obj.className = obj.className.replace(reg, ' F96');
         }
     }
     function toggleClass(obj,cls){
         if(hasClass(obj,cls)){
             removeClass(obj, cls);
         }else{
             addClass(obj, cls);
         }
     }

     function toggleClassTest2(){
         var lis = document.getElementsByClassName("oou2")[0]
        toggleClass(lis,"B38");

     }





