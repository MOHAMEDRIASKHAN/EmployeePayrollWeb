const header = `
<tr>
<th></th>
<th>Name</th>
<th>Gender</th>
<th>Department</th>
<th>Salary</th>
<th>Actions</th>
</tr>
`;

function loadPage()
{
    var table = document.querySelector('#table');
    var list = localStorage.getItem('list');
    if(list != null) {
        var arr = JSON.parse(list);
        var contentRow = header;
        arr.forEach(emp => {
            contentRow += `
            <tr id=${emp.name}>
            <td></td>
            <td>${emp.name}</td>
            <td>${emp.gender}</td>
            <td>${emp.department}</td>
            <td>${emp.salary}</td>
            <td>
            <img class="pointer" name="1" onclick="remove('${emp.name}')" alt="delete"
                src="image/delete.png">
            <img name="1"  alt="edit"  onclick="update('${emp.name}')"
                src="image/edit.png">
                </td>
                    </tr>
                    `;
        });
        table.innerHTML = contentRow;
    }
}
