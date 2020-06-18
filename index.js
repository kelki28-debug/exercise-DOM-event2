let list = []
let ul = document.querySelector('ul');

let button = document.querySelector('.add');

button.addEventListener('click', fungsiBaru)



function fungsiBaru(){
    let userInput = document.querySelector('.user-input').value;
    list.push(userInput)
    ul.innerHTML = null
    list.map((items, index) => {
        
        let li = document.createElement('li');
        let item = document.createTextNode(items);
        let button = document.createElement('button')
        let adding = document.createTextNode('Add')
        let button1 = document.createElement('button');
        button1.innerHTML = 'Delete';
        
        li.appendChild(item);
        button.appendChild(adding)
        ul.appendChild(li);
        li.appendChild(button);
        li.appendChild(button1)
        button.setAttribute('id', `add-${index}`);
        button1.setAttribute('id', `delete-${index}`);
        li.setAttribute('id', `list-${index}`);
        let addButton = document.getElementById(`add-${index}`);
        addButton.addEventListener('click', function () {
            let edit = prompt('edit: ')
            // let newEdit = document.createTextNode(edit);
            li.innerHTML = `<li>${edit}</li><button id=add-${index}>Add</button><button id=delete-${index}>Delete</button>`
        })
        let deleteButton = document.getElementById(`delete-${index}`);

        deleteButton.addEventListener('click', function(){
            deleteHandler(index)
        })

     
    })
}


function deleteHandler(index){
    list.splice(index, 1)

    ul.innerHTML = null
    list.map((items, index) => {
        
        let li = document.createElement('li');
        let item = document.createTextNode(items);
        let button = document.createElement('button')
        let adding = document.createTextNode('Add')
        let button1 = document.createElement('button');
        button1.innerHTML = 'Delete';
        
        li.appendChild(item);
        button.appendChild(adding)
        ul.appendChild(li);
        li.appendChild(button);
        li.appendChild(button1)
        button.setAttribute('id', `add-${index}`);
        button1.setAttribute('id', `delete-${index}`);
        li.setAttribute('id', `list-${index}`);
        // let addButton = document.getElementById(`add-${index}`);
        // addButton.addEventListener('click', function () {
        //     let edit = prompt('Edit: ');
        //     edit = document.createTextNode(edit);
        //     li.documentQuertySelector('.list0')appendChild(edit)
        // })
        let deleteButton = document.getElementById(`delete-${index}`);

        deleteButton.addEventListener('click', function(){
            deleteHandler(index)
        })

     
    })
    
}

