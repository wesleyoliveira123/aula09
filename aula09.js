class Produto {
  constructor(nome, preco, categoria) {
    this.nome = nome
    this.preco = preco
    this.categoria = categoria
  }

  exibirDetalhes() {
    console.log(`Nome: ${this.nome} | Preço: R$ ${this.preco.toFixed(2)} | Categoria: ${this.categoria}`)
  }
}

const listaProdutos = []

function adicionarProduto(nome, preco, categoria) {
  const novoProduto = new Produto(nome, preco, categoria)
  listaProdutos.push(novoProduto)
}

function listarProdutos() {
  console.log("Lista de Produtos")
  listaProdutos.forEach(produto => produto.exibirDetalhes())
}

function buscarProduto(nome) {
  const produtoEncontrado = listaProdutos.find(
    produto => produto.nome.toLowerCase() === nome.toLowerCase()
  )
  if (produtoEncontrado) {
    console.log("Produto encontrado:")
    produtoEncontrado.exibirDetalhes()
  } else {
    console.log("Produto não encontrado.")
  }
}

function filtrarPorCategoria(categoria) {
  const filtrados = listaProdutos.filter(
    produto => produto.categoria.toLowerCase() === categoria.toLowerCase()
  )
  console.log(`Produtos da categoria "${categoria}"`)
  filtrados.forEach(produto => produto.exibirDetalhes())
}

function resumoEstatistico() {
  const total = listaProdutos.reduce((soma, produto) => soma + produto.preco, 0)
  console.log(`Total de produtos: ${listaProdutos.length}`)
  console.log(`Soma total dos preços: R$ ${total.toFixed(2)}`)
}

adicionarProduto("Notebook", 3500.00, "Eletrônico")
adicionarProduto("Cadeira Gamer", 900.00, "Móveis")
adicionarProduto("Mouse", 150.00, "Eletrônico")
adicionarProduto("Mesa", 450.00, "Móveis")

listarProdutos()
buscarProduto("mouse")
filtrarPorCategoria("móveis")
resumoEstatistico()
