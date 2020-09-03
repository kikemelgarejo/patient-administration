
const agregarCita=()=>{
    let id=uuid.v1(); //usando librería para generar id único

    let mascota=document.querySelector("#mascota").value;
    let propietario=document.querySelector("#propietario").value;
    let fecha=document.querySelector("#fecha").value;
    let hora=document.querySelector("#hora").value;
    let sintomas=document.querySelector("#sintomas").value;

    //validación sencilla de campos en el formulario
    //.trim elimina los espacios en blanco al principio y al final de nuestra cadena
    if(mascota.trim()===''||
    propietario.trim()===''||
    fecha.trim()===''||
    hora.trim()===''||
    sintomas.trim()===''){
        mostrarError("#msj-error","Hay un campo incompleto");
        return;
    }
}

const mostrarError=(elemento, mensaje)=>{
    divError=document.querySelector(elemento);//se hace referencia al div donde quiero que muestre el error
    divError.innerHTML=`<p class="alerta-error">${mensaje}</p>`;//toma el div y le inserta el siguiente html
    setTimeout(()=>{ divError.innerHTML=``;},2000);//pasado 2 segundos de visualizacion del mensaje este metodo luego lo borrará

}
