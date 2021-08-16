function verificar() {
    data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/hbebe.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/hjovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/hadulto.png')
            } else {
                img.setAttribute('src', 'img/hidoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/mbebe.png')                
            } else if (idade < 21) {
                img.setAttribute('src', 'img/mjovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/madulto.png')
            } else {
                img.setAttribute('src', 'img/midoso.png')               
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${genero} com ${idade} ano(s).`
        res.appendChild(img)
    }
}