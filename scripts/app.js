var lista=document.getElementById("lista_mercado");
var leche=document.createElement("li");/*crea un elemento en html*/
console.log(leche);

var texto=document.createTextNode("Leche Alqueria");/*Crea un elemento de texto*/
leche.appendChild(texto);/*Agrega el elemento de texto al elemento en html*/
console.log(texto);

lista.appendChild(leche);/*Agrega el elemento al html y se refleja en la pagina*/

function agregar(){

	var producto=document.getElementById('producto').value;
	var lista=document.getElementById("lista_mercado");
	var item=document.createElement("li");
	var texto=document.createTextNode(producto);
	item.appendChild(texto);
	lista.appendChild(item);
}


/*var lista=document.getElementById("lista_mercado");
console.log(lista.parentNode);*/

var elementos=document.getElementsByTagName("li");
var lista=elementos[0].parentNode;
var item=document.createElement("li");
var texto=document.createTextNode("Ejemplo");
item.appendChild(texto);
lista.insertBefore(item,elementos[0]);/*Coloca un elemento en la posicion particular*/

item.innerHTML='Otro ejemplo';

lista.replaceChild(item,elementos[0]);/*Reemplaza un elemento*/






