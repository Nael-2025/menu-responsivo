let botao = document.querySelector('.botao-menu')
let navegacao = document.querySelector('.navegacao')

botao.addEventListener('click', () => {
    navegacao.classList.toggle('ativo')
})