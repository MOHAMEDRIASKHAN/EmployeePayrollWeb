
var index = 1;
function save(){
    var emp = new Employee();
    emp.id = index++;
    var nameElement = Get('#name');
    emp.salary = Get('#salary').value;
   emp.note = Get('#note').value;
    emp.department = GetDepartment('[name=department]');// HR,Sales,
    emp.gender = GetGender('[name=gender]')
    emp.name = nameElement.value;
    emp.profilePic = GetImageSrc('[name=profile]');

    alert(emp.toString());
}
function Get(id){
    return document.querySelector(id);
}
function GetImageSrc(id){
    var AllItems = document.querySelectorAll(id);
    var selectedItems = [];
    AllItems.forEach(element => {
        if(element.checked){
            selectedItems.push(element);
        }
    });
    var selectedFirst = selectedItems[0];
    var src = selectedFirst.nextElementSibling;
    return src.getAttribute('src');
}
function GetGender(id){
    var selected;
    var AllElements = document.querySelectorAll(id);
    AllElements.forEach(x=>{
        if(x.checked){
            selected = x;
        }
    });

    return selected.value;
}
function GetDepartment(id){
    var st="";
    // document.querySelectorAll(id).forEach(element=>{
    //     if(element.checked){
    //         st +=element.nextElementSibling.innerText+",";
    //     }
    // });
    var deptElements = document.querySelectorAll(id);
    deptElements.forEach(element=>{
        if(element.checked){
            st +=element.nextElementSibling.innerText+",";
        }
    })

    return st;
}
