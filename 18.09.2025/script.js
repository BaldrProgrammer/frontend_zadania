const input = document.querySelector('#polakipidory_i')
const button = document.querySelector('#polakipidory_b')
const container = document.querySelector('#polakiahueli')
let selected = null;

for(let i = 1; i <= 31; i++){
    const yacheika = document.createElement('div')
    yacheika.addEventListener('click', ()=>{
        yacheika.style.outline = '2px solid red'
        if (selected){
            selected.style.outline = '1px solid #7DA453'
        }
        selected = yacheika
    })

    const data = document.createElement('h5')
    data.textContent = `2020-08-${String(i).padStart(2, "0")}`
    yacheika.appendChild(data)

    const text = document.createElement('p')
    yacheika.appendChild(text)

    yacheika.className = 'yacheika'
    container.appendChild(yacheika)
}

button.addEventListener('click', ()=>{
    selected.querySelector('p').textContent = input.value
})
