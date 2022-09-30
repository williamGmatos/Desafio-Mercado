function confirmar() {
    var formaD = document.getElementById('formaD')
    var formaC = document.getElementById('formaC')
    var formaP = document.getElementById('formaP')
    var cartãos = document.getElementById('cartãos')
    var cartãoss = document.getElementById('cartãoss')
    var pix = document.getElementById('pix')
    var pixx = document.getElementById('pixx')

    if(formaD.checked || formaC.checked) {
        cartãos.style.display = 'block'
        cartãoss.style.display = 'block'
        pix.style.display = 'none'
        pixx.style.display = 'none'
    } else if(formaP.checked) {
        pix.style.display = 'block'
        pixx.style.display = 'block'
        cartãos.style.display = 'none'
        cartãoss.style.display = 'none'
    }
}

function finalizar() {
    var finalizar = document.getElementById('finalizar')
    if(finalizar) {
        window.alert('Compra bem sucedida! Continuar comprando?')
    }
}