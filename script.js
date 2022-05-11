
var elozoszamok = []

function generalas() {
    var ekozott = document.getElementById('szamok').value;
    var szam = Math.floor(Math.random() * ekozott + 1);

    document.getElementById('genszam').innerHTML = szam
    elozoszamok.push(' ' + szam + ' ')
    document.getElementById().innerHTML = elozoszamok
    
}

function hozzaadd() {
    var szammezo = document.getElementById('szamok');
    var i = parseInt(szammezo.value, 10);
    szammezo.value = ++i;
} function elvesz() {
    var szammezo = document.getElementById('szamok');
    var i = parseInt(szammezo.value, 10);
    szammezo.value = --i;
}


const textarea = document.getElementById('generaltszamok');
const btn = document.getElementById('gen');
btn.addEventListener('click', function handleClick() {
  textarea.value = elozoszamok;
});