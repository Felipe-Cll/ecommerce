export interface IProduto {
  id: number;
  descricao: string;
  preco: number;
  descricaoPreco: string;
  quantidadeEstoque: number;
  imagem: string;
}

export interface IProdutoCarrinho extends IProduto {
  quantidade: number;
}

export const produtos: IProduto[] = [
  { id: 1, descricao: "Produto 01", preco: 439.00, descricaoPreco: "À vista no PIX", imagem: "/assets/produtoP.png", quantidadeEstoque: 10 },
  { id: 2, descricao: "Produto 02", preco: 1200.50, descricaoPreco: "À vista no PIX", imagem: "/assets/produtoP.png", quantidadeEstoque: 10 },
  { id: 3, descricao: "Produto 03", preco: 749.99, descricaoPreco: "À vista no PIX", imagem: "/assets/produtoP.png", quantidadeEstoque: 10 },
  { id: 4, descricao: "Produto 04", preco: 599.99, descricaoPreco: "À vista no PIX", imagem: "/assets/produtoP.png", quantidadeEstoque: 10 },
  { id: 5, descricao: "Produto 05", preco: 299.99, descricaoPreco: "À vista no PIX", imagem: "/assets/produtoP.png", quantidadeEstoque: 10 },
  { id: 6, descricao: "Produto 06", preco: 399.99, descricaoPreco: "À vista no PIX", imagem: "/assets/produtoP.png", quantidadeEstoque: 10 },
  { id: 7, descricao: "Produto 07", preco: 499.99, descricaoPreco: "À vista no PIX", imagem: "/assets/produtoP.png", quantidadeEstoque: 10 },
  { id: 8, descricao: "Produto 08", preco: 18449.99, descricaoPreco: "À vista no PIX", imagem: "/assets/produtoP.png", quantidadeEstoque: 10 },
  { id: 9, descricao: "Produto 09", preco: 1000, descricaoPreco: "À vista no PIX", imagem: "/assets/produtoP.png", quantidadeEstoque: 10 },
  { id: 10, descricao: "Produto 10", preco: 2500, descricaoPreco: "À vista no PIX", imagem: "/assets/produtoP.png", quantidadeEstoque: 10 },
  { id: 11, descricao: "Produto 11", preco: 4500, descricaoPreco: "À vista no PIX", imagem: "/assets/produtoP.png", quantidadeEstoque: 10 },
  { id: 12, descricao: "Produto 12", preco: 20, descricaoPreco: "À vista no PIX", imagem: "/assets/produtoP.png", quantidadeEstoque: 10 },
  { id: 13, descricao: "Produto 13", preco: 200, descricaoPreco: "À vista no PIX", imagem: "/assets/produtoP.png", quantidadeEstoque: 10 },
  { id: 14, descricao: "Produto 14", preco: 50, descricaoPreco: "À vista no PIX", imagem: "/assets/produtoP.png", quantidadeEstoque: 10 },
  { id: 15, descricao: "Produto 15", preco: 159.99, descricaoPreco: "À vista no PIX", imagem: "/assets/produtoP.png", quantidadeEstoque: 10 },
]
