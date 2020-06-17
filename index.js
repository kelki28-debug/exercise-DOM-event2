let list = []
let ul = document.querySelector('ul');

let button = document.querySelector('.add');

button.addEventListener('click', function(){
    let userInput = document.querySelector('.user-input').value;
    list.push(userInput)
    
    console.log(list)
    list.map(items =>{
        list.shift(items)
        let li = document.createElement('li');
        let item = document.createTextNode(items);
        let button = document.createElement('button')
        let adding = document.createTextNode('Add')
        let button1 = document.createElement('button');
        button1.innerHTML = 'Delete';
        li.appendChild(item);
        button.appendChild(adding)
         li.appendChild(button);
        li.appendChild(button1)
        ul.appendChild(li);
       
        button.setAttribute('class', 'button');
        button1.setAttribute('class', 'button');
        li.setAttribute('class', 'list');
        console.log(li)
    })
})



