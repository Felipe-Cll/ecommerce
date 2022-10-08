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
  { id: 1, descricao: "Mouse fino", preco: 439.00, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-1.jpg", quantidadeEstoque: 10 },
  { id: 2, descricao: "Laptop Mac", preco: 1200.50, descricaoPreco: "À vista no PIX", imagem: "./assets/laptop-2.png", quantidadeEstoque: 10 },
  { id: 3, descricao: "Mouse Gamer preto", preco: 749.99, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-2.jpg", quantidadeEstoque: 10 },
  { id: 4, descricao: "Mouse cinza", preco: 599.99, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-3.jpg", quantidadeEstoque: 10 },
  { id: 5, descricao: "Mouse gamer branco", preco: 299.99, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-4.jpg", quantidadeEstoque: 10 },
  { id: 6, descricao: "Teclado branco", preco: 399.99, descricaoPreco: "À vista no PIX", imagem: "./assets/teclado-1.jpg", quantidadeEstoque: 10 },
  { id: 7, descricao: "Teclado preto", preco: 499.99, descricaoPreco: "À vista no PIX", imagem: "./assets/teclado-2.jpg", quantidadeEstoque: 10 },
  { id: 8, descricao: "Laptop cinza", preco: 18449.99, descricaoPreco: "À vista no PIX", imagem: "./assets/laptop-1.jpg", quantidadeEstoque: 10 },
  { id: 9, descricao: "Processador Ryzen", preco: 1000, descricaoPreco: "À vista no PIX", imagem: "./assets/processador.jpg", quantidadeEstoque: 10 },
  { id: 10, descricao: "Placa de vídeo", preco: 2500, descricaoPreco: "À vista no PIX", imagem: "./assets/placa-video.jpg", quantidadeEstoque: 10 },
  { id: 11, descricao: "Monitor branco", preco: 4500, descricaoPreco: "À vista no PIX", imagem: "./assets/monitor-1.jpg", quantidadeEstoque: 10 },
  { id: 12, descricao: "HD", preco: 20, descricaoPreco: "À vista no PIX", imagem: "./assets/hd.jpg", quantidadeEstoque: 10 },
  { id: 13, descricao: "AirPods", preco: 200, descricaoPreco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-1.jpg", quantidadeEstoque: 10 },
  { id: 14, descricao: "Fonde de ouvido FX", preco: 50, descricaoPreco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-2.jpg", quantidadeEstoque: 10 },
  { id: 15, descricao: "Fonde de ouvido XEZ", preco: 159.99, descricaoPreco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-3.jpg", quantidadeEstoque: 10 },
]
