const input = document.querySelector('#add_task_I')
const inputButton = document.querySelector('#add_task_B')
const done = document.querySelector('.element_button')
const ul = document.querySelector('#inside_main')

inputButton.addEventListener('click', ()=>{
    let text = input.value
    text.clear()

    let li = document.createElement('li')
    if (ul.children.length % 2 === 0){
        li.setAttribute('class', 'element_of_list')
    }
    else {
        li.setAttribute('class', 'element_of_list_P')
    }

    let p = document.createElement('li')
    let button = document.createElement('li')
    p.setAttribute('class', 'element_p')
    button.setAttribute('class', 'element_button')

    // <li class="element_of_list_P">
    //                     <p class="element_p">
    //                         Zakupy
    //                     </p>
    //                     <button type="button" class="element_button">
    //                         Wykonane
    //                     </button>
    //                 </li>
})
