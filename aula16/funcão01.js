function parimp(n){
    if(n%2== 0){
        return 'par'
    }else{
        return 'impar'
    }
}
let res = parimp(5)
console.log(`O valor é ${res}`)