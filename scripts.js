
    let lable=document.getElementById("l1")
    let dec=document.getElementById("b1")
    let res=document.getElementById("b2")
    let inc=document.getElementById("b3")
    let count=0;
    dec.onclick=function(){
        count--;
        lable.textContent=count;
    }
    res.onclick=function(){
        count=0;
        lable.textContent=count;
    }
    inc.onclick=function(){
        count++;
        lable.textContent=count;
    }

