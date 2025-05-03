function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('ft')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >=0 && hora < 12){
        img.src='img/ftdia.png'
        document.body.style.background='#e5bc86'
    }else if(hora >=12 && hora <= 18) {
        img.src='img/tarde.png'
        document.body.style.background='#fc6c03'
    }else{
        img.src='img/ftnoite.png'
        document.body.style.background='#031938'
    }

}