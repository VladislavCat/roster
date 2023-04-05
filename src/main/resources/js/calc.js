function insert(num) {
    document.form.textview.value = document.form.textview.value + '+' + num;
    document.form.lords.value = document.form.lords.value + '+' + num/3;
    document.form.wantier.value = document.form.wantier.value + '-' + num;
    equal();
}
function insertMin(num) {
    document.form.textview.value = document.form.textview.value + '-' + num;
    document.form.lords.value = document.form.lords.value + '-' + num/3;
    document.form.wantier.value = document.form.wantier.value + '+' + num;
    equal();
}
function insertUp(num, name) {
    let numer = document.getElementById(name);
    if (numer.value != '0'){
        numer.value = numer.value + '-' + 1;
        numer.value = eval(numer.value);
        insert(num);
    }
}
function backDop(num,form,shrt) {
    if(form=='notS'){
        document.form.dops.value = document.form.dops.value + '-' + 1;
    }
    if(form=='S'){
        document.form.dops.value = document.form.dops.value + '+' + 1;
    }
    document.form.textview.value = document.form.textview.value + '-' + document.getElementById(num).value;
    document.form.lords.value = document.form.lords.value + '-' + document.getElementById(num).value/3;
    if(shrt!=='0'){
        document.getElementById(shrt*3).value = document.getElementById(shrt*3).value + '-' + document.getElementById(shrt*4).value;
        document.getElementById(shrt*3).value = eval(document.getElementById(shrt*3).value);
        document.getElementById(shrt*2).value = 4;
        document.getElementById(shrt*2).value = eval(document.getElementById(shrt*2).value);
        document.getElementById(num).value = document.getElementById(shrt*4).value + '-' + document.getElementById(shrt*4).value;
        document.getElementById(num).value = eval(document.getElementById(shrt*4).value);
    }
    equal()
}

function saplus() {
    document.form.dops.value = document.form.dops.value + '+' + 1;
    equal();
}
function saminus() {
    document.form.dops.value = document.form.dops.value + '-' + 1;
    equal();
}
function sapportplus(num) {
    if(document.form.dops.value != '0'){
        saminus();
        insert(num);
    }
}
function sapportminus(num) {
    if(document.form.dops.value != '0'){
        saplus();
        insertMin(num);
    }
}

function shetPLus(num,id) {
    let numer = document.getElementById(id*2);
    if (numer.value != '0'){
        numer.value = numer.value + '-' + 1;
        numer.value = eval(numer.value);
        insert(num);
        document.getElementById(id*3).value = document.getElementById(id*3).value + '+' + num;
        document.getElementById(id*3).value = eval(document.getElementById(id*3).value);
        document.getElementById(id*4).value = document.getElementById(id*4).value + '+' + num;
        document.getElementById(id*4).value = eval(document.getElementById(id*4).value);
    }
}
function shetMinus(num,id) {
    document.getElementById(id).value = document.getElementById(id).value - num;
}

function clean() {
    document.form.textview.value = "0";
    document.form.lords.value = "0";
    document.form.dops.value = "0";
    document.form.wantier.value = "";
}
function equal() {
    var exp = document.form.textview.value;
    var lord = document.form.lords.value;
    var dop = document.form.dops.value;
    var expec = document.form.wantier.value;
    if(exp) {
        document.form.textview.value = eval(exp);
        document.form.lords.value = eval(lord);
        document.form.dops.value = eval(dop);
        document.form.wantier.value = eval(expec);
    }
}