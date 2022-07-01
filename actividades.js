// let sortDirection = false;
// let actividadData =[
//     {
//         id: '1',
//         nombre: 'Ruta del diaulo',
//         descripcion: 'La ruta mas diaula del mundo',
//         cupo: '3',
//         cupo_traslado: '3',
//         precio: '$666.666',
//         estado: 'En preparacion',
//         hora: '10:27PM',
//         fecha: '06/30/2022',
//         createdAt: '06/30/2022',
//         updatedAt: '06/30/2022'

//     }
// ]


// window.onload = () =>{
//     loadTableData(actividadData)
// }

// loadTableData(actividadData);



// function loadTableData(actividadData){
//     const tableBody = document.getElementById('actividadTableData');
//     let dataHtml = '';

//     for(let actividad of actividadData) {
//         dataHtml += `<tr>
//                         <td>${actividad.id}</td>
//                         <td>${actividad.nombre}</td>
//                         <td>${actividad.descripcion}</td>
//                         <td>${actividad.cupo}</td>
//                         <td>${actividad.cupo_traslado}</td>
//                         <td>${actividad.precio}</td>
//                         <td>${actividad.estado}</td>
//                         <td>${actividad.hora}</td>
//                         <td>${actividad.fecha}</td>
//                         <td>${actividad.createdAt}</td>
//                         <td>${actividad.updatedAt}</td>
//                       </tr>`;
//     }
//     console.log(dataHtml)
//     tableBody.innerHTML = dataHtml;
// }


const formEl = document.querySelector('form');
const tbodyEl = document.querySelector('tbody');
function onAddWebsite(e){
    e.preventDefault();
    const id = document.getElementById('id').value;
    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;
    const cupo = document.getElementById('cupo').value;
    const cupo_traslado = document.getElementById('cupo_traslado').value;
    const precio = document.getElementById('precio').value;
    const estado = document.getElementById('estado').value;
    const hora = document.getElementById('hora').value;
    const fecha = document.getElementById('fecha').value;
    const createdAt = document.getElementById('createdAt').value;
    const updatedAt = document.getElementById('updatedAt').value;


    const tableEl = document.querySelector('table');

    tbodyEl.innerHTML +=`
                        <tr>
                            <td>${id}</td>
                            <td>${nombre}</td>
                            <td>${descripcion}</td>
                            <td>${cupo}</td>
                            <td>${cupo_traslado}</td>
                            <td>${precio}</td>
                            <td>${estado}</td>
                            <td>${hora}</td>
                            <td>${fecha}</td>
                            <td>${createdAt}</td>
                            <td>${updatedAt}</td>
                            <td><button class="deleteBtn">Borrar</td>
                        </tr>`;
}

function onDeleteRow(e){
    if (!e.target.classList.contains('deleteBtn')){
        return;
    }

    const btn = e.target;
    btn.closest('tr').remove();
}


formEl.addEventListener('submit', onAddWebsite);
tableEl.addEventListener('click', onDeleteRow)