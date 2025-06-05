
let numb = []
function adicionar(){
    let vlnumb = document.getElementById('txtn1')
    let res = document.getElementById('ad')
    if(vlnumb.value.length == 0 || vlnumb.value.length > 100 || vlnumb.value.length == vlnumb){
        alert('Por favor, confira os dados colados')
    }else{
        numb.push(vlnumb.value)
        res = ""
        for(valor in numb){
            let item = document.createElement('Option')
            item.text = `o valor adicionado é ${vlnumb}`
            item.value = `${numb}`
            res.appendChild(item)
        }
    }
    vlnumb = ''
}