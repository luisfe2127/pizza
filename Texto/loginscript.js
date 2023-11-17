function enviar() {
    document.getElementById('ienviar')
    document.getElementById('iemail')
    document.getElementById('isenha')

    let txtsenha = document.getElementById('iemail')
    let txtemail = document.getElementById('isenha')

    if (txtsenha, txtemail > 8) {
        alert('Certo')
    } else {
        alert('Errado')
    }
}