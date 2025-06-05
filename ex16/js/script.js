function verificar(){
    let inicio = document.getElementById('txtn1')
    let fim = document.getElementById('txtn2')
    let passo = document.getElementById('txtn3')
    let res = document.getElementById('res')
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert(`[ERRO] Verifique se os dados foram colocados corretamente`)
    } else{
        res.innerHTML = 'Contando:'
        let n = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        for(let v = n; v <= f; v += p){
            res.innerHTML += `${v} `
            
        }
    }
}