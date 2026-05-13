const input = document.querySelector('#polak_ofigelI')
const button = document.querySelector('#polak_ofigelB')
const tr1 = document.querySelector('#tr1')
const tr2 = document.querySelector('#tr2')


button.addEventListener('click', ()=>{
    value = input.value

    tr1.querySelector('td').style.background = `hsl(${value}, 100%, 50%)`

    let nasyshenost = 100
    for (let i of tr2.querySelectorAll('td')) {
        nasyshenost -= 20
        i.style.background = `hsl(${value}, ${nasyshenost}%, 50%)`
    }
})
