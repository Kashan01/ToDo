let addToDo = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");

alert("Single click to line through and double click to delete");

addToDo.addEventListener('click', function(){
    var para = document.createElement('p');
    para.classList.add('paraStyling');
    para.innerText = inputField.value;
    toDoContainer.appendChild(para);
    inputField.value = "";
    para.addEventListener('click', function(){
        para.style.textDecoration = "line-through";
    });
    para.addEventListener('dblclick', function(){
        toDoContainer.removeChild(para);
    });
});