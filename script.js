var cls = 1;

function btn0() {
    if (cls == 1) {
        document.getElementById('btn0').value = 'X';
        document.getElementById('btn0').disabled = true;
        cls = 0;
    }
    else {
        document.getElementById('btn0').value = 'O';
        document.getElementById('btn0').disabled = true;
        cls = 1;
    }
}
function btn1() {
    if (cls == 1) {
        document.getElementById('btn1').value = 'X';
        document.getElementById('btn1').disabled = true;
        cls = 0;
    }
    else {
        document.getElementById('btn1').value = 'O';
        document.getElementById('btn1').disabled = true;
        cls = 1;
    }
}
function btn2() {
    if (cls == 1) {
        document.getElementById('btn2').value = 'X';
        document.getElementById('btn2').disabled = true;
        cls = 0;
    }
    else {
        document.getElementById('btn2').value = 'O';
        document.getElementById('btn2').disabled = true;
        cls = 1;
    }
}
function btn3() {
    if (cls == 1) {
        document.getElementById('btn3').value = 'X';
        document.getElementById('btn3').disabled = true;
        cls = 0;
    }
    else {
        document.getElementById('btn3').value = 'O';
        document.getElementById('btn3').disabled = true;
        cls = 1;
    }
}
function btn4() {
    if (cls == 1) {
        document.getElementById('btn4').value = 'X';
        document.getElementById('btn4').disabled = true;
        cls = 0;
    }
    else {
        document.getElementById('btn4').value = 'O';
        document.getElementById('btn4').disabled = true;
        cls = 1;
    }
}
function btn5() {
    if (cls == 1) {
        document.getElementById('btn5').value = 'X';
        document.getElementById('btn5').disabled = true;
        cls = 0;
    }
    else {
        document.getElementById('btn5').value = 'O';
        document.getElementById('btn5').disabled = true;
        cls = 1;
    }
}
function btn6() {
    if (cls == 1) {
        document.getElementById('btn6').value = 'X';
        document.getElementById('btn6').disabled = true;
        cls = 0;
    }
    else {
        document.getElementById('btn6').value = 'O';
        document.getElementById('btn6').disabled = true;
        cls = 1;
    }
}
function btn7() {
    if (cls == 1) {
        document.getElementById('btn7').value = 'X';
        document.getElementById('btn7').disabled = true;
        cls = 0;
    }
    else {
        document.getElementById('btn7').value = 'O';
        document.getElementById('btn7').disabled = true;
        cls = 1;
    }
}
function btn8() {
    if (cls == 1) {
        document.getElementById('btn8').value = 'X';
        document.getElementById('btn8').disabled = true;
        cls = 0;
    }
    else {
        document.getElementById('btn8').value = 'O';
        document.getElementById('btn8').disabled = true;
        cls = 1;
    }
}

function win() {
    var a0 = document.getElementById('btn0').value
    var a1 = document.getElementById('btn1').value
    var a2 = document.getElementById('btn2').value
    var a3 = document.getElementById('btn3').value
    var a4 = document.getElementById('btn4').value
    var a5 = document.getElementById('btn5').value
    var a6 = document.getElementById('btn6').value
    var a7 = document.getElementById('btn7').value
    var a8 = document.getElementById('btn8').value

    if (a0 == 'X' && a1 == 'X' && a2 == 'X') {
        document.getElementById('status').value = 'X is Win'
        document.getElementById('btn3').disabled = true;
        document.getElementById('btn4').disabled = true;
        document.getElementById('btn5').disabled = true;
        document.getElementById('btn6').disabled = true;
        document.getElementById('btn7').disabled = true;
        document.getElementById('btn8').disabled = true;
    }

    if (a3 == 'X' && a4 == 'X' && a5 == 'X') {
        alert("X is Win");
        document.getElementById('btn0').disabled = true;
        document.getElementById('btn1').disabled = true;
        document.getElementById('btn2').disabled = true;
        document.getElementById('btn6').disabled = true;
        document.getElementById('btn7').disabled = true;
        document.getElementById('btn8').disabled = true;
    }

    if (a6 == 'X' && a7 == 'X' && a8 == 'X') {
        alert("X is Win");
        document.getElementById('btn3').disabled = true;
        document.getElementById('btn4').disabled = true;
        document.getElementById('btn5').disabled = true;
        document.getElementById('btn0').disabled = true;
        document.getElementById('btn1').disabled = true;
        document.getElementById('btn2').disabled = true;
    }

    if (a0 == 'X' && a3 == 'X' && a6 == 'X') {
        alert("X is Win");
        document.getElementById('btn7').disabled = true;
        document.getElementById('btn4').disabled = true;
        document.getElementById('btn5').disabled = true;
        document.getElementById('btn8').disabled = true;
        document.getElementById('btn1').disabled = true;
        document.getElementById('btn2').disabled = true;
    }

    if (a1 == 'X' && a4 == 'X' && a7 == 'X') {
        alert("X is Win");
        document.getElementById('btn3').disabled = true;
        document.getElementById('btn6').disabled = true;
        document.getElementById('btn5').disabled = true;
        document.getElementById('btn0').disabled = true;
        document.getElementById('btn8').disabled = true;
        document.getElementById('btn2').disabled = true;
    }

    if (a2 == 'X' && a5 == 'X' && a8 == 'X') {
        alert("X is Win");
        document.getElementById('btn3').disabled = true;
        document.getElementById('btn4').disabled = true;
        document.getElementById('btn7').disabled = true;
        document.getElementById('btn0').disabled = true;
        document.getElementById('btn1').disabled = true;
        document.getElementById('btn6').disabled = true;
    }

    if (a0 == 'O' && a1 == 'O' && a2 == 'O') {
        alert("O is Win");
        document.getElementById('btn3').disabled = true;
        document.getElementById('btn4').disabled = true;
        document.getElementById('btn5').disabled = true;
        document.getElementById('btn6').disabled = true;
        document.getElementById('btn7').disabled = true;
        document.getElementById('btn8').disabled = true;
    }

    if (a3 == 'O' && a4 == 'O' && a5 == 'O') {
        alert("O is Win");
        document.getElementById('btn0').disabled = true;
        document.getElementById('btn1').disabled = true;
        document.getElementById('btn2').disabled = true;
        document.getElementById('btn6').disabled = true;
        document.getElementById('btn7').disabled = true;
        document.getElementById('btn8').disabled = true;
    }

    if (a6 == 'O' && a7 == 'O' && a8 == 'O') {
        alert("O is Win");
        document.getElementById('btn3').disabled = true;
        document.getElementById('btn4').disabled = true;
        document.getElementById('btn5').disabled = true;
        document.getElementById('btn0').disabled = true;
        document.getElementById('btn1').disabled = true;
        document.getElementById('btn2').disabled = true;
    }

    if (a0 == 'O' && a3 == 'O' && a6 == 'O') {
        alert("O is Win");
        document.getElementById('btn7').disabled = true;
        document.getElementById('btn4').disabled = true;
        document.getElementById('btn5').disabled = true;
        document.getElementById('btn8').disabled = true;
        document.getElementById('btn1').disabled = true;
        document.getElementById('btn2').disabled = true;
    }

    if (a1 == 'O' && a4 == 'O' && a7 == 'O') {
        alert("O is Win");
        document.getElementById('btn3').disabled = true;
        document.getElementById('btn6').disabled = true;
        document.getElementById('btn5').disabled = true;
        document.getElementById('btn0').disabled = true;
        document.getElementById('btn8').disabled = true;
        document.getElementById('btn2').disabled = true;
    }

    if (a2 == 'O' && a5 == 'O' && a8 == 'O') {
        alert("O is Win");
        document.getElementById('btn3').disabled = true;
        document.getElementById('btn4').disabled = true;
        document.getElementById('btn7').disabled = true;
        document.getElementById('btn0').disabled = true;
        document.getElementById('btn1').disabled = true;
        document.getElementById('btn6').disabled = true;
    }

    if  ((a0 == 'X' || a0 == 'O') &&
        (a1 == 'X' || a1 == 'O') &&
        (a2 == 'X' || a2 == 'O') &&
        (a3 == 'X' || a3 == 'O') &&
        (a4 == 'X' || a4 == 'O') &&
        (a5 == 'X' || a5 == 'O') &&
        (a6 == 'X' || a6 == 'O') &&
        (a7 == 'X' || a7 == 'O')) {
        alert("draw")
    } 

}



function rst(){
    location.reload('reset')
}
