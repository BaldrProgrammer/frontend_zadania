const input = document.querySelector('#polakipidory_i')
const button = document.querySelector('#polakipidory_b')
const container = document.querySelector('#polakiahueli')

for(let i = 1; i <= 31; i++){
    const yacheika = document.createElement('div')
    yacheika.textContent = 'хуета'
    yacheika.className = 'yacheika'
    container.appendChild(yacheika)
}