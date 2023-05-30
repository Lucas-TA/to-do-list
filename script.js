var input = document.getElementById("userinput");
var button = document.getElementById("enter");
var ul = document.getElementById("listContainer");

function inputLength() {
    return input.value.length;
}
function createListElement() {
    var li = document.createElement("li");
    var delButton = document.createElement("button");
    var div = document.createElement("div");

    li.classList.add("task");
    delButton.classList.add("delete");

    ul.appendChild(div);
    div.append(li, delButton);
    li.appendChild(document.createTextNode(input.value))

    input.value = "";
    delButton.innerHTML = "delete";
}
function addListItem() {
    if (inputLength() > 0) {
        createListElement();
    }
}
function taskCompleted(t){
    if (t.target.tagName === "LI") {
        t.target.classList.toggle("done");
    }
}
function deleteItem(e) {
    if (e.target.className === "delete") {
        e.target.parentElement.remove();
    }
}
function holdFunctions(e) {
    deleteItem(e);
    taskCompleted(e);
}

button.addEventListener("click", addListItem);
ul.addEventListener("click", holdFunctions)