let sortDirection = false;
let personData = [
    {rut: '19.134.443-k', 
    correo: 'ignacio@ignacio.cl', 
    nombre: 'Ignacio Gaston Pi Cabello', 
    fecha_nacimiento: '11/07/1995', 
    genero: 'M', fono: '85974492', 
    direccion: 'mi casa', 
    fono_emergencia: '12345678', 
    nombre_emergencia: 'Loretto', 
    estado: 'activo', 
    derivar_a: 'no se', 
    createdAt: '06/30/2022', 
    updatedAt:'06/30/2022'},
    {rut: '11111111', 
    correo: 'loji@ignacio.cl', 
    nombre: ' Gaston Cabello', 
    fecha_nacimiento: '11/07/1995', 
    genero: 'M', fono: '85974492', 
    direccion: 'mi casa', 
    fono_emergencia: '12345678', 
    nombre_emergencia: 'Loretto', 
    estado: 'activo', 
    derivar_a: 'no se', 
    createdAt: '06/30/2022', 
    updatedAt:'06/30/2022'},
]

window.onload = () =>{
    loadTableData(personData)
}

loadTableData(personData);

function loadTableData(personData){
    const tableBody = document.getElementById('tableData');
    let dataHtml = '';

    for(let person of personData) {
        dataHtml += `<tr>
                        <td>${person.rut}</td>
                        <td>${person.nombre}</td>
                        <td>${person.correo}</td>
                        <td>${person.fecha_nacimiento}</td>
                        <td>${person.genero}</td>
                        <td>${person.fono}</td>
                        <td>${person.direccion}</td>
                        <td>${person.fono_emergencia}</td>
                        <td>${person.nombre_emergencia}</td>
                        <td>${person.estado}</td>
                        <td>${person.derivar_a}</td>
                        <td>${person.createdAt}</td>
                        <td>${person.updatedAt}</td>
                      </tr>`;
    }
    console.log(dataHtml)

    tableBody.innerHTML = dataHtml;
}

function onFormSubmit(){
    var formData = readFormData();
    insertNewRecord(formData)
}

function readFormData(){
    var formData = {};
    formData["rut"] = document.getElementById("rut");
    formData["correo"] = document.getElementById("correo");
    formData["nombre"] = document.getElementById("nombre");
    formData["fecha_nacimiento"] = document.getElementById("fecha_nacimiento");
    formData["genero"] = document.getElementById("genero");
    formData["direccion"] = document.getElementById("direccion");
    formData["fono_emergencia"] = document.getElementById("fono_emergencia");
    formData["nombre_emergencia"] = document.getElementById("nombre_emergencia");
    formData["estado"] = document.getElementById("estado");
    formData["derivar_a"] = document.getElementById("derivar_a");
    formData["createdAt"] = document.getElementById("createdAt");
    formData["updatedAt"] = document.getElementById("updatedAt");
    return formData;
}

function insertNewRecord(data){
    var table = document.getElementById("tablon").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.rut;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.correo;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.nombre;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.fecha_nacimiento;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.genero;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.telefono;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.direccion;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.fono_emergencia;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = data.nombre_emergencia;
    cell10 = newRow.insertCell(9);
    cell10.innerHTML = data.estado;
    cell11 = newRow.insertCell(10);
    cell11.innerHTML = data.derivar_a;
    cell12 = newRow.insertCell(11);
    cell12.innerHTML = 'none'
    cell13 = newRow.insertCell(12);
    cell13.innerHTML = 'none'
    cell3.innerHTML = `<a ">Edit</a>
                       <a ">Delete</a>`;

}