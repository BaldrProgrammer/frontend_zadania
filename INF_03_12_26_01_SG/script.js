SUBMIT = document.getElementById("submit")
WZOR = document.getElementById("wzorI")
KOLOR = document.getElementById("kolorS")
CENA = document.getElementById("cenaI")
GALERIA = document.getElementById("galeria")

SUBMIT.addEventListener('click', ()=>{
    fileName = WZOR.value.split('\\').at(-1)
    window.alert(`Wzór: ${fileName}, kolor ${KOLOR.value} w cenie ${CENA.value} zł`)
    newImg = document.createElement('img')
    newImg.src = URL.createObjectURL(WZOR.files[0])
    newImg.setAttribute('class', 'miniatury')
    GALERIA.appendChild(newImg)
})