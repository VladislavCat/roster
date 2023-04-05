var myid = "1";

let str = '<div class=\"item\" onclick=\"sapportminus(100);\"><font onclick=\"parentElement.remove();\">delet me</font>Саппорт по 100</div>';

//Линейные юниты выбор
let tacticals ='<div onclick=\"saplus(); parentElement.remove(); UniteCreate(\'.lineFormationAdd\', \'8 Tactical Squads\', 275);\">8 Tactical Squads</div>';
let assolts ='<div onclick=\"saplus(); parentElement.remove(); UniteCreate(\'.lineFormationAdd\', \'8 Assault Squads units\', 300);\">8 Assault Squads units</div>';
let bretchers ='<div onclick=\"saplus(); parentElement.remove(); UniteCreate(\'.lineFormationAdd\', \'8 Despoiler Squads units\', 300);\">8 Despoiler Squads units</div>';

function dop(inStr, where) {
    if (document.form.dops.value != '0') {
        var div = document.createElement('div');
        div.className = 'class_3';
        div.innerHTML = inStr;
        document.querySelector(where).appendChild(div);
        sapportplus(100);
    }
}
function del() {
    var allDivs = document.form.querySelectorAll('.class_2 div'),
        indx = allDivs.length - 1;
    if (indx < 0) return false;
    allDivs[indx].parentNode.removeChild(allDivs[indx]);
    sapportminus(100);
}

function lineCreate(where) {
    var div = document.createElement('div');
    div.className = 'class_3';
    div.innerHTML = div.innerHTML + tacticals;
    div.innerHTML = div.innerHTML + assolts;
    div.innerHTML = div.innerHTML + bretchers;
    document.querySelector(where).appendChild(div);
}

function UniteCreate(where, who, num) {
    var div = document.createElement('div');
    div.className = 'free';
    var myEle = document.getElementById(myid);
    if(myEle){
        myid = myid+1;
    }
    var points = num;

    // аккардаеон для апргрейдов
    let shet ='<input value=\"4\" name=\"upgreads\" id=\"' + myid*2 + '\">';
    let shetAll ='<input value=\"'+ points + '\" name=\"upgreads\" id=\"' + myid*3 + '\">';
    let shetUp ='<input value=\"0\" name=\"upgreads\" id=\"' + myid*4 + '\">';

   // апгрейды + саппорты
   //транспорт
    let rino='<div onclick=\"shetPLus(\'0\',\'' + myid + '\');\">Rino +</div>';
    let lendak='<div onclick=\"shetPLus(\'75\',\'' + myid + '\');\">Lendak +</div>';

    insert(points);
    div.innerHTML = '<div class=\"accordion\" onclick=\"openCity(event,'+myid+');\">'+ who + shetAll +'&emsp;</div><div onclick=\"backDop('+ myid*3 +', \'notS\',\'0\'); parentElement.remove();\">del</div><div class=\"panel\" id='+myid+'><div onclick=\"backDop('+ myid*4 +', \'\', '+ myid +');\">del</div>'+shetUp+shet+rino+lendak+'</div>';
    document.querySelector(where).appendChild(div);
}

//клик по элемениу добавляет галочку