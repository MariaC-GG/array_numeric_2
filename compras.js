let valor_compra = document.getElementById('valor_compra')
let parcial = document.getElementById('parcial')
let total = document.getElementById('total')
let vetor = document.getElementById('vetor')

let tipo_produto = []
let quantidade = []
let preco_produtos = []

parcial.addEventListener('click', ()=>{
    let produto = document.getElementById('produto').value
    let qtd_produto = document.getElementById('qtd_produto').value
    let preco_produto = document.getElementById('preco_produto').value

    tipo_produto.push(produto)
    quantidade.push(qtd_produto)
    preco_produto.push(preco_produto)

    console.log(tipo_produto)
    console.log(quantidade)
    console.log(preco_produto)
    
    let soma = 0.0
    for(i=0;i<preco_produto.length;i++){
        soma + soma + (quantidade[i]*preco_produto[i])
    }

    vetor.innerHTML =''
    for(i=0;i<preco_produto.length;i++){
        // vetor.innerHTML = 'stotal R$=' + soma
        vetor.innerHTML += 'produto =' + tipo_produto[i] + '&emsp;'
        vetor.innerHTML += 'quantidade =' + quantidade[i] + '&emsp;'
        vetor.innerHTML += 'preco_produto = R$' + preco_produto[i] + '<br>'

    }
    // vetor.innerHTML = 'produto confirmado=' + tipo_produto
})