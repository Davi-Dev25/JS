let idade = 18
console.log(`Você tem ${idade} anos`)
if (idade < 16){
    console.log(`Não pode votar`)
} else if( idade < 18 || idade > 67){
    console.log(`Voto opcional`)
} else{
    console.log(`é obrigatório o voto`) 
}