//Efeito exibir cartões na área visivel da página
const cartoes = document.querySelectorAll('.content-card')
const observador = new IntersectionObserver((entradas) =>{
    entradas.forEach((entrada)=>{
        if (entrada.isIntersecting){
            entrada.target.classList.remove('reverse')
            entrada.target.classList.add('visivel')
        } else {
            entrada.target.classList.remove('visivel')
            entrada.target.classList.add('reverse')
        }  
    })
})

cartoes.forEach(cartao=>{
    observador.observe(cartao)
})

//Efeito do letreiro

let titulo = document.getElementById('titulo')
let textoTitulo, contador
textoTitulo = titulo.textContent
titulo.textContent = ''
contador = 0
function reseteTexto(){
    contador = 0
    titulo.textContent = ''
    digitarTexto()
}
function digitarTexto(){
    if (contador < textoTitulo.length){
        titulo.textContent += textoTitulo.charAt(contador)
        contador ++
        setTimeout(digitarTexto, 70) 
    } else {
        setTimeout(reseteTexto, 3000)
    }
}
digitarTexto()