
function btnclick(x, y){
    if(y== undefined){
        
        x = Math.random(10 - 20) ;
        y = Math.random(10 - 20)     ;
    }
    document.getElementById("result1").innerHTML=(x*y);
}

