const input = document.querySelector('#add_task_I')
const inputButton = document.querySelector('#add_task_B')
const ul = document.querySelector('#inside_main')
let done = document.querySelectorAll('.element_button')

inputButton.addEventListener('click', ()=>{
    let text = input.value

    let li = document.createElement('li')
    if (ul.children.length % 2 === 0){
        li.setAttribute('class', 'element_of_list')
    }
    else {
        li.setAttribute('class', 'element_of_list_P')
    }

    let p = document.createElement('p')
    let button = document.createElement('button')
    p.setAttribute('class', 'element_p')
    p.textContent = text
    button.setAttribute('class', 'element_button')
    button.textContent = 'Wykonane'

    li.appendChild(p)
    li.appendChild(button)
    ul.appendChild(li)

    done = document.querySelectorAll('.element_button')
    done.forEach((doneE)=>{
    doneE.addEventListener('click', (e)=>{
    let p = e.currentTarget.parentElement.querySelector('p')
    p.style.textDecoration = 'line-through'
    })
})

})

done.forEach((doneE)=>{
    doneE.addEventListener('click', (e)=>{
    let p = e.currentTarget.parentElement.querySelector('p')
    p.style.textDecoration = 'line-through'
    })
})
