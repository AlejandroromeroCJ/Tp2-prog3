function validarDatos() {
    const edad = parseInt(document.getElementById("edad").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const name = document.getElementById("nombre").value;
    const lname = document.getElementById("apellido").value;
    const mail = document.getElementById("correo").value;
    
    console.log(edad,altura,name,lname,mail)

    if(name==""||lname==""||!mail.includes("@")||mail==""||name.length>50||lname.length>50||edad<18||altura<0||altura>230)
    {
        // document.getElementById("mensaje").textContent = `${name}`;
        document.getElementById("mensaje").textContent = `datos inválidos`;
        document.getElementById("mensaje").style = `color:red`;

    }else{        
        document.getElementById("mensaje").textContent = `datos válidos`;
        document.getElementById("mensaje").style = `color:green`;
    }
}
