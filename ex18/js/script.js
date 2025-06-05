function multiplicar(){
    let mult = document.getElementById('txtn1')
    let tab = document.getElementById('selftab')
    if(mult.value.length == 0){
        alert('[ERRO] Por favor coloque algum número acima')
    }else{
        let n = Number(mult.value)
        tab.innerHTML = ''
        for(let c = 1; c <=10; c++){
            let item = document.createElement('Option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `${c}`
            tab.appendChild(item)
        }

    }
}