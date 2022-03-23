function cal(){
    let num1= document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let resultado = (num1 / (num2 * num2));

    alert("resultado: "+resultado);
    document.getElementById('resultado').value=resultado;

    document.getElementById('num1').value="";
    document.getElementById('num2').value="";
}

function valu(){
    let peso =3768;
    let dolar= document.getElementById('dolar').value;
    let calculo =parseFloat(peso) * parseFloat(dolar);

    alert("calculo: "+calculo);
    document.getElementById('calculo').value=calculo;

    document.getElementById('dolar').value="";
    
}

function zon(){

    let precio = 44000;
    let ama = document.getElementById('ama').value;
    let calculo =parseFloat(precio) * parseFloat(ama);

    alert("calculo: "+calculo);
    document.getElementById('calculo').value=calculo;

    document.getElementById('ama').value="";

} 

function tify(){

    let precio = 32000;
    let spot = document.getElementById('spot').value;
    let calculo =parseFloat(precio) * parseFloat(spot);

    alert("calculo: "+calculo);
    document.getElementById('calculo').value=calculo;

    document.getElementById('spot').value="";

} 

function leg(){

    let precio = 36000;
    let lol = document.getElementById('lol').value;
    let calculo =parseFloat(precio) * parseFloat(lol);

    alert("calculo: "+calculo);
    document.getElementById('calculo').value=calculo;

    document.getElementById('lol').value="";

} 

function sto(){

    let precio = 28000;
    let play = document.getElementById('play').value;
    let calculo =parseFloat(precio) * parseFloat(play);

    alert("calculo: "+calculo);
    document.getElementById('calculo').value=calculo;

    document.getElementById('play').value="";

} 


function tabla(){
    const tabla = document.getElementById('tabla');
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let edad = document.getElementById('edad').value;
    let estasvacunado = document.getElementById('estasvacunado').value;



    tabla.innerHTML+=`<tr>
    <td>${nombre}</td>
    <td>${apellido}</td>
    <td>${edad}</td>
    <td>${estasvacunado}</td>
</tr>`
document.getElementById('nombre').value="";
document.getElementById('apellido').value="";
document.getElementById('edad').value="";
   
}





 





