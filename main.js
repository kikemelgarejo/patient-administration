
let citas=JSON.parse(localStorage.getItem("citas"));//recupera el arreglo que está guardado en el localStorage

if(citas){
    localStorage.setItem("citas",JSON.stringify(citas));
}else{
    localStorage.setItem("citas",JSON.stringify([]));
}

const visualizarCitas=()=>{
    let citasHTML= ``;//se declara variable
    let citas=JSON.parse(localStorage.getItem("citas"));//recupero los valores del localStorage

    citas.map(cita=>{ //iteración con .map para poder traer el valor de cada propiedad del objeto
        citasHTML+=`<div class="cita">
                        <p> Mascota: <span>${cita.mascota}</span></p>
                        <p> Mascota: <span>${cita.propietario}</span></p>
                        <p> Mascota: <span>${cita.fecha}</span></p>
                        <p> Mascota: <span>${cita.hora}</span></p>
                        <p> Mascota: <span>${cita.sintomas}</span></p>
        
                        <button class ="button eliminar u-full-width"
                        onclick="eliminarCita(${cita.id})">Eliminar Cita 
                        </button>
                     </div>`;
    })
    document.querySelector("#listadoCitas").innerHTML=citasHTML; //asignando todas las citas a nuestro div en el index
}

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
        mostrarError("#msj-error","favor rellenar todos los campos");
        return;
    }

    let nuevaCita={id,mascota,propietario,fecha,hora,sintomas} //guardando key, value de las variables
    citas.push(nuevaCita);
    localStorage.setItem("citas",JSON.stringify(citas));//se guarda como array en el localStorage
    document.querySelector("#form").reset();//limpio el formulario
    visualizarCitas();//se ejecuta método para ver citas creadas
}

const mostrarError=(elemento, mensaje)=>{
    divError=document.querySelector(elemento);//se hace referencia al div donde quiero que muestre el error
    divError.innerHTML=`<p class="alerta-error">${mensaje}</p>`;//toma el div y le inserta el siguiente html
    setTimeout(()=>{ divError.innerHTML=``;},2000);//pasado 2 segundos de visualizacion del mensaje este metodo luego lo borrará

}
