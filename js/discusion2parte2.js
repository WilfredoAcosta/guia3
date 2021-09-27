var articulos = [];
var nombre, precio, resp,suma = 0;


do{
    nombre = prompt('Introduzca el nombre del producto:','');
    precio = prompt('Introduzca el precio del producto:','');
    suma+=parseInt(precio);
    resp = prompt('¿Desea agregar otro producto? (si/no)','');
    articulos.push([nombre,precio]);
}while(resp == 'si');
document.write("<table><thead><tr><th>Nombre</th><th>Precio</th></tr></thead><tbody>");

for(var i = 0; i < articulos.length;i++){
    document.write("<tr><td>"+articulos[i][0]+"</td>");
    document.write("<td>"+articulos[i][1]+"</td></tr>");
}


document.write("</tbody></table><h1>Ventas totales: $"+suma+"</h1>");