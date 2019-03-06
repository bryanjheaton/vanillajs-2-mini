function addTodo(event) {
    event.preventDefault();
    let list = document.querySelector("ul");

    let item = document.createElement("li");
    let text = document.getElementById("item").value;
    item.innerText = text;

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "x";
    deleteButton.addEventListener("click", removeTodo);
    item.appendChild(deleteButton);

    item.addEventListener("click", completeTodo)

    list.appendChild(item);
    document.getElementById('item').value = '';
}

function removeTodo(event) {
    event.target.parentNode.remove();
}

console.log(document.querySelector("aside").innerText)

function completeTodo(event) {
    let value = event.target.getAttribute("aria-checked")
    let text = document.getElementById("completed-message")
    // console.log(text)
    if (value !== "true") {
        event.target.setAttribute("aria-checked", "true");
        text.style = "visibility: visible;"
        setTimeout(function () {text.style = "visibility: hidden;"}, 2000);  
    } else {
        event.target.setAttribute("aria-checked", "false");
    }
    
}

document
    .querySelector('button')
    .addEventListener("click", addTodo)

// let button = document.querySelector("button")
// button.addEventListener("click", addTodo)
