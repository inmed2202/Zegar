function warsaw(){
    var today = new Date();

    var day = today.getDate();
    if (day<10) day = "0"+day;
    var month = today.getMonth()+1;
    if (month<10) month = "0"+month;
    var year = today.getFullYear();

    var hour = today.getHours();
    if (hour<10) hour = "0"+hour;
    var minute = today.getMinutes();
    if (minute<10) minute = "0"+minute;
    var second = today.getSeconds();
    if (second<10) second = "0"+second;

    document.getElementById("dataWs").innerHTML = day+"."+month+"."+year;
    document.getElementById("czasWs").innerHTML = hour+":"+minute+":"+second;

    setTimeout("warsaw(),1000");

}

function tokyo(){
    var today = new Date();

    var day = today.getDate();
    if (day<10) day = "0"+day;
    var month = today.getMonth()+1;
    if (month<10) month = "0"+month;
    var year = today.getFullYear();

    var hour = today.getHours()+8;
    if (hour<10) hour = "0"+hour;
    if (hour==25) {hour = "01"; day=day+1;}
    if (hour==26) {hour = "02"; day=day+1;}
    if (hour==27) {hour = "03"; day=day+1;}
    if (hour==28) {hour = "04"; day=day+1;}
    if (hour==29) {hour = "05"; day=day+1;}
    if (hour==30) {hour = "06"; day=day+1;}
    if (hour==31) {hour = "07"; day=day+1;}
    if (hour==32) {hour = "08"; day=day+1;}
    var minute = today.getMinutes();
    if (minute<10) minute = "0"+minute;
    var second = today.getSeconds();
    if (second<10) second = "0"+second;

    document.getElementById("dataTk").innerHTML = day+"."+month+"."+year;
    document.getElementById("czasTk").innerHTML = hour+":"+minute+":"+second;

    setTimeout("tokyo(),1000");
}

function madrid(){
    var today = new Date();

    var day = today.getDate();
    if (day<10) day = "0"+day;
    var month = today.getMonth()+1;
    if (month<10) month = "0"+month;
    var year = today.getFullYear();

    var hour = today.getHours();
    if (hour<10) hour = "0"+hour;
    var minute = today.getMinutes();
    if (minute<10) minute = "0"+minute;
    var second = today.getSeconds();
    if (second<10) second = "0"+second;

    document.getElementById("dataMd").innerHTML = day+"."+month+"."+year;
    document.getElementById("czasMd").innerHTML = hour+":"+minute+":"+second;

    setTimeout("madrid(),1000");
}

function newyork(){
    var today = new Date();

    var day = today.getDate();
    if (day<10) day = "0"+day;
    var month = today.getMonth()+1;
    if (month<10) month = "0"+month;
    var year = today.getFullYear();

    var hour = (today.getHours()-5);
    if (hour==-5) {hour = 19; day=day-1;}
    if (hour==-4) {hour = 20; day=day-1;}
    if (hour==-3) {hour = 21; day=day-1;}
    if (hour==-2) {hour = 22; day=day-1;}
    if (hour==-1) {hour = 23; day=day-1;}
    if (hour<10) hour = "0"+hour;
    
    
    
    var minute = today.getMinutes();
    if (minute<10) minute = "0"+minute;
    var second = today.getSeconds();
    if (second<10) second = "0"+second;

    document.getElementById("dataNy").innerHTML = day+"."+month+"."+year;
    document.getElementById("czasNy").innerHTML = hour+":"+minute+":"+second;

    setTimeout("newyork(),1000");
}

function london(){
    var today = new Date();

    var day = today.getDate();
    if (day<10) day = "0"+day;
    var month = today.getMonth()+1;
    if (month<10) month = "0"+month;
    var year = today.getFullYear();

    var hour = today.getHours()-1;
    if (hour<10) hour = "0"+hour;
    if (hour=-1) {hour = "00"; day=day-1;}
    var minute = today.getMinutes();
    if (minute<10) minute = "0"+minute;
    var second = today.getSeconds();
    if (second<10) second = "0"+second;

    document.getElementById("dataLd").innerHTML = day+"."+month+"."+year;
    document.getElementById("czasLd").innerHTML = hour+":"+minute+":"+second;

    setTimeout("london(),1000");
}

function beijing(){
    var today = new Date();

    var day = today.getDate();
    if (day<10) day = "0"+day;
    var month = today.getMonth()+1;
    if (month<10) month = "0"+month;
    var year = today.getFullYear();

    var hour = today.getHours()+7;
    if (hour<10) hour = "0"+hour;
    if (hour==25) {hour = "01"; day=day+1;}
    if (hour==26) {hour = "02"; day=day+1;}
    if (hour==27) {hour = "03"; day=day+1;}
    if (hour==28) {hour = "04"; day=day+1;}
    if (hour==29) {hour = "05"; day=day+1;}
    if (hour==30) {hour = "06"; day=day+1;}
    if (hour==31) {hour = "07"; day=day+1;}
    var minute = today.getMinutes();
    if (minute<10) minute = "0"+minute;
    var second = today.getSeconds();
    if (second<10) second = "0"+second;

    document.getElementById("dataBj").innerHTML = day+"."+month+"."+year;
    document.getElementById("czasBj").innerHTML = hour+":"+minute+":"+second;

    setTimeout("beijing(),1000");
}



