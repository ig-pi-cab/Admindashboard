

const formEl = document.querySelector('form');
const tbodyEl = document.querySelector('tbody');
function onAddWebsite(e){
    e.preventDefault();
    const url = document.getElementById('url').value;
    const alt = document.getElementById('alt').value;
    const createdAt = document.getElementById('createdAt').value;
    const updatedAt = document.getElementById('updatedAt').value;
    const tableEl = document.querySelector('table');

    tbodyEl.innerHTML +=`
    <tr>
        <td>${url}</td>
        <td>${alt}</td>
        <td>${createdAt}</td>
        <td>${updatedAt}</td>
        <td></td>
        <td><button class="deleteBtn">Borrar</td>
    </tr>`
}

function onDeleteRow(e){
    if (!e.target.classList.contains('deleteBtn')){
        return;
    }

    const btn = e.target;
    btn.closest('tr').remove();
}

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#imagen')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}


formEl.addEventListener('submit', onAddWebsite);
tableEl.addEventListener('click', onDeleteRow);

