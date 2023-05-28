

function mostrarResumen() {
event.preventDefault()
    var inputCantidad = document.getElementById("cantidad").value;
    var selectCategoria = document.getElementById("categoria").value;
    
    var total=0;
    
    if (selectCategoria ==="Estudiante"){
    total= (200 -(200*80/100)) * inputCantidad ;
    
    }
    
    else if (selectCategoria ==="Trainee"){
        total= (200 -(200*50/100)) * inputCantidad ;
    
        }
    
     else  {
        total= (200 -(200*15/100)) * inputCantidad ;
         
        }
    
    document.getElementById("resultado").innerHTML=" Total a pagar: $"+total
  

  }

function borrar(){
    event.preventDefault()
    document.getElementById("nombre").value="";
    document.getElementById("apellido").value=""
    document.getElementById("correo").value=""
    document.getElementById("cantidad").value="";
    document.getElementById("categoria").value="";
    document.getElementById("resultado").innerHTML=" Total a pagar: $"

}