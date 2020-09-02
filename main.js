
const agregarCita=()=>{
    let id=uuid.v1(); //usando librería para generar id único

    let mascota=document.getElementById("#mascota").value;
    let propietario=document.getElementById("#propietario").value;
    let fecha=document.getElementById("#fecha").value;
    let hora=document.getElementById("#hora").value;
    let sintomas=document.getElementById("#sintomas").value;

    //validación sencilla de campos en el formulario
    //.trim elimina los espacios en blanco al principio y al final de nuestra cadena
    if(mascota.trim()===''||
    propietario.trim()===''||
    fecha.trim()===''||
    hora.trim()===''||
    sintomas.trim()===''){
        mostrarError("msj-error","Hay un campo incompleto")
    }

}