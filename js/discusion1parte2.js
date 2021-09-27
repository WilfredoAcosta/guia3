var num = prompt('Introduzca un numero entero:','');
var cifras = [];
var pares = 0, impares = 0,sumapares=0,sumaimapres=0,sumatotal=0;
var cifra = num.toString();

for(var i = 0; i < num.length; i++){
    if(cifra.charAt(i) % 2 == 0){
        pares++;
        sumapares += parseInt(cifra.charAt(i));
        sumatotal += parseInt(cifra.charAt(i));
    }else{
        impares++;
        sumaimapres += parseInt(cifra.charAt(i));
        sumatotal += parseInt(cifra.charAt(i));
    }
    cifras.push(cifra.charAt(i));
}
document.write("Cantidad de cifras: " + num.length);
document.write("<br>Cantidad de cifras impares: " + impares);
document.write("<br>Cantidad de cifras pares: " + pares);
document.write("<br>Suma de cifras impares: " + sumaimapres);
document.write("<br>Suma de cifras pares: " + sumapares);
document.write("<br>Suma de todas las cifras: " + sumatotal);
document.write("<br>Numero mayor: " + Math.max(...cifras));
document.write("<br>Numero menor: " + Math.min(...cifras));