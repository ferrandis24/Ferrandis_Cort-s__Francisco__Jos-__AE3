document.addEventListener('DOMContentLoaded', () => {
    var form = document.createElement("form");
    document.body.appendChild(form)
   
    form.addEventListener("submit",ValidarForm)
    const nombreSpan = document.createElement("span");
    nombreSpan.textContent = "Debes insertar el Nombre";
    nombreSpan.id = "error-name";
    nombreSpan.style.display = "none"
    const nombre = document.createElement("input");
    nombre.type= "text";
    nombre.id= "nombre";
    nombre.placeholder= "inserte su nombre aqui";
    form.appendChild(nombre);
    var br = document.createElement("br");
    form.appendChild(br.cloneNode());
    form.appendChild(nombreSpan)
 
    const apellidosSpan = document.createElement("span");
    apellidosSpan.textContent = "Debes insertar los apellidos";
    apellidosSpan.id = "error-apellidos";
    apellidosSpan.style.display = "none"
    const apellidos = document.createElement("input");
    apellidos.type= "text";
    apellidos.id= "apellidos";
    apellidos.placeholder= "inserte sus apellidos aqui";
    form.appendChild(apellidos);
    form.appendChild(br.cloneNode());
    form.appendChild(apellidosSpan)
 
    const dateSpan = document.createElement("span");
    dateSpan.textContent = "Debes insertar la fecha";
    dateSpan.id = "error-date";
    dateSpan.style.display = "none"
    const date = document.createElement("input");
    date.type= "date";
    date.id="date";
    date.placeholder="inserte la fecha aqui";
    form.appendChild(date);
    form.appendChild(br.cloneNode());
    form.appendChild(dateSpan)
 
    const direccion = document.createElement("input");
    direccion.type= "text";
    direccion.id= "direccion";
    direccion.placeholder= "inserte su dirección aqui";
    form.appendChild(direccion);
    form.appendChild(br.cloneNode());
    
    const codpostSpan = document.createElement("span");
    codpostSpan.textContent = "Debes insertar el Codigo Postal";
    codpostSpan.id = "error-codpost";
    codpostSpan.style.display = "none"
    const codpost = document.createElement("input");
    codpost.type= "text";
    codpost.id= "codpost";
    codpost.maxLength =5;
    codpost.minLength =5;


    codpost.placeholder= "inserte su Codigo Postal aqui";
    form.appendChild(codpost);
    form.appendChild(br.cloneNode());
    form.appendChild(codpostSpan)

    const provincia = document.createElement("select");
    const option1 = document.createElement("option");
    option1.text = "Castellón";
    option1.id = "castellon";
    provincia.add(option1);
    const option2 = document.createElement("option");
    option2.text = "Valencia";
    option2.id = "valencia";
    provincia.add(option2);
    const option3 = document.createElement("option");
    option3.text = "Alicante";
    option3.id = "alicante";
    provincia.add(option3);
    form.appendChild(provincia);
    form.appendChild(br.cloneNode());

    const municipioSpan = document.createElement("span");
    municipioSpan.textContent = "Debes insertar el municipio";
    municipioSpan.id = "error-municipio";
    municipioSpan.style.display = "none"
    const municipio = document.createElement("input");
    municipio.type= "text";
    municipio.id= "municipio";
    municipio.placeholder= "Seleccione el municipio";
    form.appendChild
    form.appendChild(municipio);
    form.appendChild(br.cloneNode());
    form.appendChild(municipioSpan)

    const submit = document.createElement("button");
    submit.type = "submit";
    submit.textContent = "Enviar";
    submit.addEventListener("click", ValidarForm)
    let error = document.createElement("p");
    form.appendChild(submit);
    form.appendChild(br.cloneNode());
    parent.location=confirmacion.html;
   
})
function ValidarForm() {
    let valid = true;
    if(nombre.value == "")
    {

        event.preventDefault();
        document.getElementById("error-name").style.display = "block";
        let valid = false;
    }
    if(apellidos.value == "")
    {
        let valid = false;
        event.preventDefault();
        document.getElementById("error-apellidos").style.display = "block"
    }

    if(date.value == ""||isNaN(codpost.value)){
        event.preventDefault();
        document.getElementById("errorCodpost").style.display = "block"
        error = true;
    }
    else if(codpost.value != "" || isInteger(codpost.value))
    {
        document.getElementById("errorCodpost").style.display = "none";
    }
    {
        let valid = false;
        event.preventDefault();
        document.getElementById("error-date").style.display = "block"
    }

    if(codpost.value == "")
    {
        let valid = false;
        event.preventDefault();
        document.getElementById("error-codpost").style.display = "block"
    }


    if(municipio.value == "")
    {
        let valid = false;
        event.preventDefault();
        document.getElementById("error-municipio").style.display = "block"
    }

    if(valid == false)
    return valid;
  }
  

