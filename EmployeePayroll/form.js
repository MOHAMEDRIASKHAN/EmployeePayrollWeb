function save() {
    var emp = new Employee();
    emp.id = index++;
    var nameElement = Get('#name');
    emp.salary= Get('#salary').value;
    emp.note = Get('#note').value;
    emp.department=GetDepartment('[name=department]');
    emp.gender = GetGender('[name=gender]')
    emp.name = nameElement.value;
    emp.profilePic = GetImageSrc('[name=profile');

    var st_arr = localStorage.getItem('list');
    if(st_arr != null){
        let arr = JSON.parse(st_arr);
        arr.push(emp);
        var json_arr = JSON.stringify(arr);
        localStorage.setItem('list',json_arr);
    }else {
        let arr = []
        arr.push(emp);
        let jsonArr = JSON.stringify(arr);
        localStorage.setItem('list',jsonArr);
    }
    }
    const remove= (name)=>{
        let ele = document.getElementById(name);
        ele.style.display = "none";
        let employeeArr = JSON.parse(localStorage.getItem("EmployeeList"));
        let index = employeeArr.findIndex(item=>{
            return item._name == name;
        });
        employeeArr.splice(index,1);
        localStorage.setItem("EmployeeList",JSON.stringify(employeeArr));
    }
    const update = (name)=>{
        localStorage.setItem("update",name);
        window.open("new_payroll_form_js.html");
        window.location = 'new_payroll_form_js.html' ;
    }
    const createInnerHtml = () => {
        const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                            "<th>Salary</th><th>Start Date</th><th>Actions</th>";
            const innerHtml = `${headerHtml}
        <tr>
            <th></th>
            <th>Name</th>
            <th>Gender</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Start Date</th>
            <th>Actions</th>
        </tr>
        <tr>
            <td class="profile"><img class="profile" alt=""
                    src="images/profile2.png">
            </td>
            <td>Abhilash Meher</td>
            <td>Male</td>
            <td><div class="dept-label">HR</div>
            <div class="dept-label">Finance</div></td>
            <td>4000000</td>
            <td>20 February 2022</td>
            <td>
            <img name="1" onclick="remove(this)" alt="delete"
                src="images/delete.png">
            <img name="1"  alt="edit" onclick="update(this)"
                src="images/edit.png">
            </td>
          </tr>
        `;
        document.querySelector('#table-display').innerHtml=innerHtml;
    }