function min(){
    str=""
    for(i=0 ; i<=59;i++){
        str+=`<option>${i}<option>`
        document.getElementById("minute").innerHTML=str
    }
}
min()

function Hour(){
    str=""
    for(i=0 ; i<=59;i++){
        str+=`<option>${i}<option>`
        document.getElementById("hour").innerHTML=str
    }
}
Hour()

function date(){
    str=""
    for(i=0 ; i<=59;i++){
        str+=`<option>${i}<option>`
        document.getElementById("Date").innerHTML=str
    }
}
date()

