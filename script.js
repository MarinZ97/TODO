const input = document.querySelector('#input');
const button = document.querySelector('#btn');
const ul = document.querySelector('#todo-lista');



function addList(e) {
    e.preventDefault(); 
    if(!input.value) {
        alert("Upisi rijec")
    } else if(input.value[0]===String.fromCharCode(32)) {
        alert("Ne pocinje rijec sa razmakom")
    } else {


        // Kreiranje todo div
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo")

        // Kreiranje itema
        const result = input.value;
        const li = document.createElement('li');
        li.classList.add("li-item")
        li.innerText = result;
        todoDiv.appendChild(li);

        // Kreiranje check buttona
        const check = document.createElement("button");
        check.innerHTML = '<i class="fas fa-check"></i>';
        check.classList.add("check-item");
        todoDiv.appendChild(check);

        // Kreiranje trash buttona
        const remove = document.createElement('button');
        remove.classList.add("remove-item");
        remove.innerHTML = '<i class="fa fa-trash"></i>';
        todoDiv.appendChild(remove);

        // Append todoDiv na ul
        ul.appendChild(todoDiv);

        // Brisanje value iz inputa nakon klika
        input.value = "";

    }
}

// Brisanje liste i krizanje check-a nakon ispunavanja
function deleteCheck(e) {
    const item = e.target;
    if (item.classList[0] === "remove-item") {
        const parent = item.parentElement;
        // Animation
        parent.classList.add("deleted")
        parent.addEventListener('animationend', function() {
            parent.remove();
        })
    }
    if (item.classList[0] === "check-item") {
        const parent = item.parentElement;
        parent.classList.toggle("checked");
    }
}

button.addEventListener('click', addList);
ul.addEventListener('click', deleteCheck);
