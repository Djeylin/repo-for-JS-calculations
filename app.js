let Первое_число = 14;
let Второе_число = 4;
let вычисление_ответ = 0;
// let Запись_для_ответа = "ответ";

function вычислить() {
   вычисление_ответ = Первое_число + Второе_число;
    document.getElementById("Netice").innerHTML = "ответ " + вычисление_ответ;
}

function минус() {
    вычисление_ответ = Первое_число - Второе_число;
     document.getElementById("Netice").innerHTML = "ответ " + вычисление_ответ;
 }

 function умножить() {
    вычисление_ответ = Первое_число * Второе_число;
     document.getElementById("Netice").innerHTML = "ответ " + вычисление_ответ;
 }

 function поделить() {
    вычисление_ответ = Первое_число / Второе_число;
     document.getElementById("Netice").innerHTML = "ответ " + вычисление_ответ;
 }
