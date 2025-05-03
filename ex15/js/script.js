function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value.length > ano){
        alert(`[ERRO] Verifque os dados preenchidos`)
    } else {
        let fsex = document.getElementsByName('sexo')
        let idade = ano - Number(fano.value)
        let gen = ''
        let img = document.createElement('img')
        img.setAttribute(`id`,` foto`)
        if(fsex[0].checked){
            gen = 'Homem'
            if(idade >=0 && idade <= 10){
                img.setAttribute(`src`,`foto-img/hm-criança.jpg`)
            } else if (idade < 20){
                img.setAttribute('src','foto-img/hm-jovem.jpg')
            }else if( idade < 50){
                img.setAttribute('src','foto-img/hm-adulto.jpg')
            } else{
                img.setAttribute('src','foto-img/hm-idoso.jpg')
            }


        } else if(fsex[1].checked){
            gen = 'Mulher'
            if(idade >=0 && idade <= 10){
                img.setAttribute('src', 'foto-img/m-criança.jpg')
            } else if (idade >= 11 && idade <20){
                img.setAttribute('src','foto-img/m-jovem.jpg')
            }else if(idade >= 21 && idade <50){
                img.setAttribute('src','foto-img/m-adulta.jpg')
            } else{
                img.setAttribute('src','foto-img/m-idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos`
        res.appendChild(img)
    }

}