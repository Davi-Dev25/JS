let agora = new Date
let hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horasj`)
if(hora < 12 ){
    console.log(`Bom dia!`)
    
}
else if(hora <= 18 ){
    console.log(`Boa tarde!`)
}else if (hora >= 24 || hora < 5){
    console.log(`Agora já é madrugada`)
}else{
    console.log(`Boa noite, agora é ${hora} da noite`)
}
